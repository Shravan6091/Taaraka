const db = require('../config/db');

exports.getProjects = (req, res) => {
  const query = 'SELECT * FROM projects';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.status(200).json(results);
  });
};

exports.getProjectById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM projects WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(results[0]);
  });
};
