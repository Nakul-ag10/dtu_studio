const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Ensure environment variables are loaded
if (!process.env.CLOUDINARY_CLOUD_NAME) {
  console.error("WARNING: CLOUDINARY_CLOUD_NAME is not defined in environment variables");
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "dtu_studio/misc";
    let resource_type = "auto"; // Default to auto let Cloudinary decide

    if (file.fieldname === "pdfFile") {
      folder = "dtu_studio/pdfs";
      resource_type = "raw"; // Keep raw for PDFs to avoid conversion issues
    } else if (file.fieldname === "thumbnail") {
      folder = "dtu_studio/thumbnails";
      resource_type = "image";
    }

    return {
      folder: folder,
      resource_type: resource_type,
      public_id: `${Date.now()}-${file.originalname.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`,
    };
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "pdfFile") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files allowed for pdfFile"), false);
    }
  } else if (file.fieldname === "thumbnail") {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files allowed for thumbnail"), false);
    }
  } else {
    cb(new Error(`Unknown field: ${file.fieldname}`), false);
  }
};

// Multer configuration
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
});

// Wrapper to handle multer errors and ensure req.body is populated
const uploadMiddleware = (req, res, next) => {
  console.log(`[Upload] Starting upload for fields: ${req.headers['content-length']} bytes`);
  
  upload.fields([
    { name: "pdfFile", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error("Multer/Cloudinary Error Details:", JSON.stringify(err, null, 2));
      console.error("Multer/Cloudinary Error Message:", err.message);
      
      return res
        .status(400)
        .json({ 
          message: err.message || "File upload failed at storage provider.",
          error: process.env.NODE_ENV === 'development' ? err : undefined
        });
    }
    
    console.log("[Upload] Files uploaded successfully:", 
      req.files?.pdfFile?.[0]?.path || 'No PDF', 
      req.files?.thumbnail?.[0]?.path || 'No Thumbnail'
    );

    // Ensure req.body exists
    if (!req.body) req.body = {};
    next();
  });
};

module.exports = uploadMiddleware;
