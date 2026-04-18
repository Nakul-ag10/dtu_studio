const express = require("express");
const PressRelease = require("../models/PressRelease");
const authMiddleware = require("../middleware/authMiddleware");
const {
  validateObjectId,
  validatePressRelease,
} = require("../middleware/validateInput");

const router = express.Router();

// GET all (public)
router.get("/", async (req, res) => {
  try {
    const items = await PressRelease.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// GET single by ID (public)
router.get("/:id", async (req, res) => {
  try {
    if (!validateObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format." });
    }
    const item = await PressRelease.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found." });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// POST create (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const errors = validatePressRelease(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation error.", errors });
    }

    const { title, date, content, thumbnail } = req.body;
    const item = new PressRelease({ title, date, content, thumbnail });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// PUT update (protected)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    if (!validateObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format." });
    }
    const item = await PressRelease.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
    const item = await PressRelease.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found." });
    res.json({ message: "Deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
