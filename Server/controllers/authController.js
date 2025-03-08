const bcrypt = require('bcrypt');
const User = require('../models/User');
const { validationResult } = require('express-validator');

// Registration Controller
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, password, role, service, experience, city, otherService } = req.body;
  const resume = req.file ? req.file.filename : null;  // Capture the resume file path if uploaded

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      service: service || null,
      experience: experience || null,
      resume: resume || null,  // Store the file path of the resume
      city: city || null,
      otherService: otherService || null,
    });

    res.status(201).json({ message: 'Registration successful!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
};
