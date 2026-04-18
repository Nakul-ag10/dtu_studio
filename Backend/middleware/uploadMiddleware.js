const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure directories exist
const uploadDirs = {
  pdfs: path.join(__dirname, "../uploads/pdfs"),
  thumbnails: path.join(__dirname, "../uploads/thumbnails"),
};

Object.values(uploadDirs).forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "pdfFile") {
      cb(null, uploadDirs.pdfs);
    } else if (file.fieldname === "thumbnail") {
      cb(null, uploadDirs.thumbnails);
    } else {
      cb(new Error("Unknown field"), null);
    }
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
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
