
const express = require('express');
const Item = require('../models/item');
const router = express.Router();

// Get all items (projects, guides, bundles)
router.get('/items', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
