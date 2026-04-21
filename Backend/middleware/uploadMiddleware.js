const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

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
    let resource_type = "auto";
    let format = undefined;

    if (file.fieldname === "pdfFile") {
      folder = "dtu_studio/pdfs";
      resource_type = "raw"; 
      // Raw prevents Cloudinary from altering PDF files incorrectly
    } else if (file.fieldname === "thumbnail") {
      folder = "dtu_studio/thumbnails";
      resource_type = "image";
    }

    return {
      folder: folder,
      resource_type: resource_type,
      public_id: `${Date.now()}-${Math.round(Math.random() * 1e9)}`,
    };
  },
});

// File filter (Optional, but adds an extra layer of security)
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
    cb(new Error("Unknown field"), false);
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
  upload.fields([
    { name: "pdfFile", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error("Multer Error:", err);
      return res
        .status(400)
        .json({ message: err.message || "File upload error" });
    }
    // Ensure req.body exists and parse fields
    if (!req.body) {
      req.body = {};
    }
    next();
  });
};

module.exports = uploadMiddleware;
