const express = require('express');
const Purchase = require('../models/purchase');
const Item = require('../models/item');
const User = require('../models/User');
const router = express.Router();

// Purchase an item (unlock it after payment)
router.post('/purchase', async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    // Find the user and item
    const user = await User.findByPk(userId);
    const item = await Item.findByPk(itemId);

    if (!user || !item) {
      return res.status(404).json({ error: 'User or Item not found' });
    }

    // Check if the item is locked
    if (item.locked) {
      // Mark item as unlocked
      item.locked = false;
      await item.save();

      // Add the purchased item to the user's purchase history
      const purchase = await Purchase.create({
        user_id: userId,
        item_id: itemId
      });

      res.json({ message: 'Purchase successful!', purchasedItem: item });
    } else {
      res.status(400).json({ error: 'Item is already unlocked!' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to process purchase' });
  }
});

// API to check unlock status
router.get('/item/unlock-status', async (req, res) => {
  const { userId, itemId } = req.query;

  try {
    const userPurchases = await Purchase.findAll({
      where: { user_id: userId, item_id: itemId }
    });

    if (userPurchases.length > 0) {
      res.json({ unlocked: true });
    } else {
      res.json({ unlocked: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to check unlock status' });
  }
});

module.exports = router;
