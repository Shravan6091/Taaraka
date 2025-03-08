const db = require('../config/db');

exports.addToCart = (req, res) => {
  const { userId, projectId, quantity } = req.body;

  const query = 'INSERT INTO cart (user_id, project_id, quantity) VALUES (?, ?, ?)';
  db.query(query, [userId, projectId, quantity], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add to cart' });
    }
    res.status(200).json({ message: 'Item added to cart' });
  });
};

exports.getCart = (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM cart WHERE user_id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch cart items' });
    }
    res.status(200).json(results);
  });
};
