const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Store the file in the 'uploads/resumes' directory
    cb(null, 'uploads/resumes/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using the current timestamp and original file extension
    cb(null, Date.now() + path.extname(file.originalname)); // Filename will be timestamp.extension (e.g., 1617756473942.pdf)
  },
});

// File filter: Allow only PDF files for resume uploads
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);  // Accept the file
  } else {
    cb(new Error('Invalid file type, only PDF is allowed'), false);  // Reject the file
  }
};

// Create the multer upload instance with the above storage and file filter settings
const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

module.exports = upload;
