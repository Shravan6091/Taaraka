import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../utils/api'; // Ensure to import registerUser and loginUser
import './RegisterLogin.css';

const RegisterLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'trainee',  // Default role is 'trainee'
    service: '',  // Service (for Freelancer/Client)
    experience: '',  // Freelancer experience
    resume: null,  // Resume file
    city: '',  // For Pilot registration
  });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);  // Flag to check if registration is successful
  const [isLogin, setIsLogin] = useState(false); // Whether the user is logging in or registering
  const [showForgotPassword, setShowForgotPassword] = useState(false); // To toggle the forgot password form
  const [passwordResetSent, setPasswordResetSent] = useState(false); // To track if the reset email was sent
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],  // For file input, only the first file is being selected
    });
  };

  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, password: 'Passwords do not match' });
      return false;
    }
    if (formData.password.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (!validatePassword()) {
      return;
    }

    const registrationData = new FormData();
    // Add form fields to FormData
    for (let key in formData) {
      if (formData[key]) {
        registrationData.append(key, formData[key]);
      }
    }

    // Simulate successful registration
    setTimeout(() => {
      alert("Registration successful! Please check your email to verify.");
      setIsRegistered(true); // Show registration success
    }, 1000); // Simulate delay of response

    // If using real API, send request (mocked for now)
    registerUser(registrationData)
      .then((response) => {
        console.log('Registration successful:', response);
        setIsRegistered(true);
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        setErrors({ ...errors, register: 'Something went wrong during registration' });
      });
  };

  // Handle Forgot Password
  const handleForgotPassword = () => {
    // Trigger password reset API or similar process
    setPasswordResetSent(true); // Set email sent message to true
    setShowForgotPassword(false); // Close the forgot password form
    alert('Password reset link sent to your email');
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: formData.email,
      password: formData.password,
      role: formData.role, // Include role for routing
    };

    // Simulate login success
    setTimeout(() => {
      alert("Login successful!");
      // Redirect to respective dashboard based on role
      switch (formData.role) {
        case 'freelancer':
          navigate('/freelancer-dashboard');
          break;
        case 'client':
          navigate('/client-dashboard');
          break;
        case 'trainee':
          navigate('/trainee-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'pilot':
          navigate('/pilot-dashboard');
          break;
        default:
          navigate('/'); // Default case (fallback)
      }
    }, 1000); // Simulate delay of response

    // Uncomment to use a real login API call
    // loginUser(loginData)
    //   .then((response) => {
    //     console.log('Login successful:', response);
    //     // Redirect to respective role dashboard
    //     switch (formData.role) {
    //       case 'freelancer':
    //         navigate('/freelancer-dashboard');
    //         break;
    //       case 'client':
    //         navigate('/client-dashboard');
    //         break;
    //       case 'trainee':
    //         navigate('/trainee-dashboard');
    //         break;
    //       case 'employee':
    //         navigate('/employee-dashboard');
    //         break;
    //       case 'pilot':
    //         navigate('/pilot-dashboard');
    //         break;
    //       default:
    //         navigate('/'); // Default case (fallback)
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Login failed:', error);
    //     setErrors({ ...errors, login: 'Something went wrong during login' });
    //   });
  };

  return (
    <div className="register-login-container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>

      <form onSubmit={isLogin ? handleLogin : handleSubmit}>
        {/* Role Selection (for login and registration) */}
        <select name="role" value={formData.role} onChange={handleChange} required>
          {/* Roles for registration */}
          {!isLogin && (
            <>
              <option value="trainee">Trainee</option>
              <option value="freelancer">Freelancer</option>
              <option value="client">Client</option>
              <option value="pilot">Pilot</option>
            </>
          )}

          {/* Roles for login (including Employee role) */}
          {isLogin && (
            <>
              <option value="trainee">Trainee</option>
              <option value="freelancer">Freelancer</option>
              <option value="client">Client</option>
              <option value="employee">Employee</option>
              <option value="pilot">Pilot</option>
            </>
          )}
        </select>

        {/* Fields for Registration */}
        {!isLogin && (
          <>
            {/* Name Field */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            {/* Phone Field */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              pattern="^[0-9]{10}$"
            />

            {/* Password Field */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              minLength="8"
            />

            {/* Confirm Password Field */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              minLength="8"
            />

            {/* Freelancer/Client Service Selection */}
            {(formData.role === 'freelancer' || formData.role === 'client') && (
              <div>
                <label>Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="seo">SEO</option>
                  <option value="content-writing">Content Writing</option>
                  <option value="others">Others</option>
                </select>

                {formData.service === 'others' && (
                  <input
                    type="text"
                    name="otherService"
                    value={formData.otherService}
                    onChange={handleChange}
                    placeholder="Describe other service"
                  />
                )}
              </div>
            )}

            {/* Freelancer Experience and Resume Upload */}
            {formData.role === 'freelancer' && (
              <div>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Your Experience (No.of Years)"
                  required
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
            )}

            {/* City Field (only shown for Pilot role) */}
            {formData.role === 'pilot' && (
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City Name"
                  required
                />
              </div>
            )}
          </>
        )}

        {/* Fields for Login */}
        {isLogin && (
          <>
            {/* Email Field for Login */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            {/* Password Field for Login */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              minLength="8"
            />
          </>
        )}

        {/* Submit Button */}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

        {/* Error Messages */}
        {errors.password && <div className="error">{errors.password}</div>}
        {errors.login && <div className="error">{errors.login}</div>}
        {errors.register && <div className="error">{errors.register}</div>}
      </form>

      {/* Forgot Password Section */}
      {isLogin && !showForgotPassword && (
        <div>
          <button type="button" onClick={() => setShowForgotPassword(true)}>
            Forgot Password?
          </button>
        </div>
      )}

      {showForgotPassword && (
        <div className="forgot-password">
          <h3>Reset Your Password</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <button type="button" onClick={handleForgotPassword}>
            Send Reset Link
          </button>
          <button type="button" onClick={() => setShowForgotPassword(false)}>
            Cancel
          </button>
        </div>
      )}

      {/* Email Sent Notification for Forgot Password */}
      {passwordResetSent && (
        <div className="popup">
          <h3>Password Reset Link Sent!</h3>
          <p>Please check your email for the link to reset your password.</p>
        </div>
      )}

      {/* Registration/Verification Popup */}
      {isRegistered && !isLogin && (
        <div className="popup">
          <h3>Registration Successful!</h3>
          <p>Please check your email and verify your account.</p>
        </div>
      )}

      {/* Login/Register Toggle */}
      <div>
        <p>{isLogin ? "Don't have an account?" : 'Already have an account?'}</p>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default RegisterLogin;
