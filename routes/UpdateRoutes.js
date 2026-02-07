const express = require('express');
const router = express.Router();
const Update = require('../models/Update');

// GET all updates
router.get('/', async (req, res) => {
  try {
    const updates = await Update.find().sort({ date: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new update
router.post('/', async (req, res) => {
  try {
    const newUpdate = new Update(req.body);
    const savedUpdate = await newUpdate.save();
    res.status(201).json(savedUpdate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE update
router.delete('/:id', async (req, res) => {
  try {
    await Update.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
