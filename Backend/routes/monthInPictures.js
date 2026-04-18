const express = require("express");
const fs = require("fs");
const path = require("path");
const MonthInPictures = require("../models/MonthInPictures");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { validateObjectId } = require("../middleware/validateInput");

const router = express.Router();

// GET all (public)
router.get("/", async (req, res) => {
  try {
    const items = await MonthInPictures.find().sort({
      year: -1,
      createdAt: -1,
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// POST with file upload (protected)
router.post("/", authMiddleware, upload, async (req, res) => {
  try {
    const { month, year } = req.body;

    // Validate required fields
    if (!month || !year) {
      // Clean up uploaded files
      if (req.files?.pdfFile?.[0]) fs.unlinkSync(req.files.pdfFile[0].path);
      if (req.files?.thumbnail?.[0]) fs.unlinkSync(req.files.thumbnail[0].path);
      return res.status(400).json({ message: "Month and year are required." });
    }

    if (!req.files?.pdfFile?.[0]) {
      if (req.files?.thumbnail?.[0]) fs.unlinkSync(req.files.thumbnail[0].path);
      return res.status(400).json({ message: "PDF file is required." });
    }

    // Build pdfPath and thumbnail path
    const pdfPath = `/uploads/pdfs/${req.files.pdfFile[0].filename}`;
    const thumbnail = req.files?.thumbnail?.[0]
      ? `/uploads/thumbnails/${req.files.thumbnail[0].filename}`
      : null;

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
    // Clean up files on error
    if (req.files?.pdfFile?.[0]) {
      try {
        fs.unlinkSync(req.files.pdfFile[0].path);
      } catch (e) {
        // File deletion failed, continue
      }
    }
    if (req.files?.thumbnail?.[0]) {
      try {
        fs.unlinkSync(req.files.thumbnail[0].path);
      } catch (e) {
        // File deletion failed, continue
      }
    }
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
      { new: true },
    );
    if (!item) return res.status(404).json({ message: "Not found." });
    res.json(item);
  } catch (err) {
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

    // Delete PDF file
    if (item.pdfPath) {
      const filePath = path.join(__dirname, "../", item.pdfPath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Delete thumbnail file
    if (item.thumbnail) {
      const filePath = path.join(__dirname, "../", item.thumbnail);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.json({ message: "Deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
