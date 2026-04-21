const express = require("express");
const MonthInPictures = require("../models/MonthInPictures");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { validateObjectId } = require("../middleware/validateInput");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Helper to extract Cloudinary Public ID from URL
const extractPublicId = (url) => {
  if (!url) return null;
  const parts = url.split('/');
  const versionIndex = parts.findIndex((part) => part.startsWith('v') && !isNaN(part.substring(1)));
  if (versionIndex === -1) return null;

  const publicIdWithExtension = parts.slice(versionIndex + 1).join('/');
  return publicIdWithExtension.substring(0, publicIdWithExtension.lastIndexOf('.')) || publicIdWithExtension;
};

// GET all (public)
router.get("/", async (req, res) => {
  try {
    const items = await MonthInPictures.find().sort({
      year: -1,
      createdAt: -1,
    });
    res.json(items);
  } catch (err) {
    console.error("GET MonthInPictures Error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// POST with file upload (protected)
router.post("/", authMiddleware, upload, async (req, res) => {
  try {
    const { month, year } = req.body;

    // Validate required fields
    if (!month || !year) {
      return res.status(400).json({ message: "Month and year are required." });
    }

    if (!req.files?.pdfFile?.[0]) {
      return res.status(400).json({ message: "PDF file is required." });
    }

    // `path` property contains the Cloudinary URL from multer-storage-cloudinary
    const pdfPath = req.files.pdfFile[0].path;
    const thumbnail = req.files?.thumbnail?.[0] ? req.files.thumbnail[0].path : null;

    // Create document
    const item = new MonthInPictures({
      month,
      year: parseInt(year),
      pdfPath,
      thumbnail,
    });

    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error("POST MonthInPictures Error:", err);
    res.status(500).json({ message: "Server error during file upload." });
  }
});

// PUT update (protected)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    if (!validateObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format." });
    }
    const item = await MonthInPictures.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Not found." });
    res.json(item);
  } catch (err) {
    console.error("PUT MonthInPictures Error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// DELETE (protected)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    if (!validateObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format." });
    }
    const item = await MonthInPictures.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found." });

    // Delete PDF file from Cloudinary (using resource_type: "raw" as defined in storage setup)
    if (item.pdfPath && item.pdfPath.includes("cloudinary.com")) {
      const publicId = extractPublicId(item.pdfPath);
      if (publicId) {
        // Must specify resource_type for raw files.
        await cloudinary.uploader.destroy(publicId, { resource_type: "raw" }).catch(err => console.error("Error deleting PDF from Cloudinary", err));
      }
    }

    // Delete thumbnail file from Cloudinary 
    if (item.thumbnail && item.thumbnail.includes("cloudinary.com")) {
      const publicId = extractPublicId(item.thumbnail);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId).catch(err => console.error("Error deleting thumbnail from Cloudinary", err));
      }
    }

    res.json({ message: "Deleted successfully." });
  } catch (err) {
    console.error("DELETE MonthInPictures Error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
