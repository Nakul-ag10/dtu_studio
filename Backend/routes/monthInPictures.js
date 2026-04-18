const express = require('express');
const MonthInPictures = require('../models/MonthInPictures');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// GET all (public)
router.get('/', async (req, res) => {
  try {
    const items = await MonthInPictures.find().sort({ year: -1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('Error fetching month-in-pictures:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST create (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { month, year, thumbnail, imageCount, images } = req.body;
    const item = new MonthInPictures({ month, year, thumbnail, imageCount, images });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error('Error creating month-in-pictures:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// PUT update (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await MonthInPictures.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found.' });
    res.json(item);
  } catch (err) {
    console.error('Error updating month-in-pictures:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// DELETE (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await MonthInPictures.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found.' });
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    console.error('Error deleting month-in-pictures:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
