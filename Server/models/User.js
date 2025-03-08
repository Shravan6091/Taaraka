const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../config/db');

// Define the User model
const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/, // 10-digit phone validation
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 255], // Ensure password length is at least 8 characters
    },
  },
  role: {
    type: DataTypes.ENUM('trainee', 'freelancer', 'client', 'pilot', 'employee'),
    allowNull: false,
  },
  service: {
    type: DataTypes.STRING, // Will be nullable if the role is not freelancer/client
    allowNull: true,
  },
  experience: {
    type: DataTypes.INTEGER, // Freelancer experience in years
    allowNull: true,
  },
  resume: {
    type: DataTypes.STRING, // Path to the uploaded resume file
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING, // For pilot role city
    allowNull: true,
  },
  otherService: {
    type: DataTypes.STRING, // For freelancer/client to specify other services
    allowNull: true,
  },
  // Add fields for tracking purchased/unlocked content
  purchasedProjects: {
    type: DataTypes.JSONB, // This will store an array of project IDs that the user has unlocked
    allowNull: true,
  },
  purchasedGuides: {
    type: DataTypes.JSONB, // Array of guide IDs
    allowNull: true,
  },
  purchasedBundles: {
    type: DataTypes.JSONB, // Array of bundle IDs
    allowNull: true,
  },
}, {
  timestamps: true,
  hooks: {
    // Before saving a user, hash the password
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
  },
});

// Method to check if the provided password matches the hashed password
User.prototype.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;
