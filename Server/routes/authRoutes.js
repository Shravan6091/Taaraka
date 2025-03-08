const express = require('express');
const { registerUser } = require('../controllers/authController');
const { body } = require('express-validator');
const upload = require('../middleware/fileUploadMiddleware'); // Import the file upload middleware

const router = express.Router();

// Validation for input fields
router.post(
  '/register',
  upload.single('resume'),  // Use the file upload middleware to handle 'resume' field
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('phone').matches(/^[0-9]{10}$/).withMessage('Phone number must be 10 digits'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    // Add other validations as necessary
  ],
  registerUser
);

module.exports = router;
