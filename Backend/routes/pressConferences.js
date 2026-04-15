const express = require('express');
const PressConference = require('../models/PressConference');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// GET all (public)
router.get('/', async (req, res) => {
  try {
    const items = await PressConference.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.error('Error fetching press-conferences:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// POST create (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, youtubeLink, date } = req.body;
    const item = new PressConference({ title, youtubeLink, date });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error('Error creating press-conference:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// PUT update (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await PressConference.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found.' });
    res.json(item);
  } catch (err) {
    console.error('Error updating press-conference:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// DELETE (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await PressConference.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found.' });
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    console.error('Error deleting press-conference:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
