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
    const folder = file.fieldname === "pdfFile" ? "dtu_studio/pdfs" : "dtu_studio/thumbnails";
    
    return {
      folder: folder,
      resource_type: "auto", // 'auto' is most reliable for Multer 1.x + Cloudinary
      public_id: `${Date.now()}-${file.originalname.split('.')[0].replace(/[^a-z0-9]/gi, '_').toLowerCase()}`,
    };
  },
});

// File filter (Compatible with Multer 1.x)
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "pdfFile") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Validation Error: Only PDF files allowed for pdfFile"), false);
    }
  } else if (file.fieldname === "thumbnail") {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Validation Error: Only images allowed for thumbnail"), false);
    }
  } else {
    cb(new Error(`Validation Error: Unknown field: ${file.fieldname}`), false);
  }
};

// Multer configuration (Stable 1.x)
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
});

// Wrapper to handle multer errors and ensure req.body is populated
const uploadMiddleware = (req, res, next) => {
  console.log(`[Upload] Starting upload. Content-Length: ${req.headers['content-length']}`);
  
  upload.fields([
    { name: "pdfFile", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error("DEBUG: Full Error Object:", err);
      
      // Standard Error objects are not JSON-serializable by default
      const errorResponse = {
        message: err.message || "File upload failed at storage provider.",
        code: err.code || "UNKNOWN_ERROR",
        details: err.http_code ? `Cloudinary HTTP ${err.http_code}` : undefined,
        raw: {}
      };

      // Manually copy properties because Error objects have non-enumerable props
      Object.getOwnPropertyNames(err).forEach(key => {
        errorResponse.raw[key] = err[key];
      });

      return res.status(400).json(errorResponse);
    }
    
    console.log("[Upload] Success mapping to Cloudinary paths:", 
      req.files?.pdfFile?.[0]?.path, 
      req.files?.thumbnail?.[0]?.path
    );

    if (!req.body) req.body = {};
    next();
  });
};

module.exports = uploadMiddleware;
