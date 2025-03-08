// src/utils/validate.js

// Validate email format
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Validate phone number (Indian format, 10 digits)
  export const validatePhoneNumber = (phone) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };
  
  // Validate password strength
  export const validatePassword = (password) => {
    // Minimum 8 characters, at least one uppercase letter, one number, and one special character
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
  };
  
  // Validate if the input is non-empty
  export const validateRequired = (value) => {
    return value && value.trim() !== '';
  };
  