import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to TraineeDashboard.js
import './TrainingCell.css';

// Sample data for projects, guides, and bundles
const projectsData = {
  diploma: [
    { title: 'Project 1', price: 100, locked: true },
    { title: 'Project 2', price: 120, locked: true },
    { title: 'Project 3', price: 150, locked: true },
  ],
  bachelor: [
    { title: 'Project A', price: 200, locked: true },
    { title: 'Project B', price: 250, locked: true },
  ],
  postGraduate: [
    { title: 'Project X', price: 300, locked: true },
    { title: 'Project Y', price: 350, locked: true },
  ],
};

const guidesData = [
  { title: 'Study Guide 1', price: 50 },
  { title: 'Study Guide 2', price: 75 },
  { title: 'Study Guide 3', price: 100 },
];

const bundlesData = [
  { title: 'Bundle 1', description: 'Comprehensive bundle for learning', price: 200 },
  { title: 'Bundle 2', description: 'Advanced bundle for expert learners', price: 300 },
  { title: 'Bundle 3', description: 'Beginner friendly bundle', price: 150 },
];

const TrainingCell = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedProjectsCategory, setSelectedProjectsCategory] = useState(null);
  const [selectedGuides, setSelectedGuides] = useState(false);
  const [selectedBundles, setSelectedBundles] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // State to track if user is registering
  const [userInfo, setUserInfo] = useState({ email: '', emailConfirm: '', password: '', confirmPassword: '', name: '', phone: '' });
  const [isProceedingToPayment, setIsProceedingToPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    pilotCode: '', // Pilot code is now optional
  });
  const [paymentStatus, setPaymentStatus] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false); // To track if terms are accepted
  const navigate = useNavigate();  // For navigation

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Handle login
  const handleLogin = () => {
    if (userInfo.email && userInfo.password) {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter valid login details!');
    }
  };

  // Email and phone validation
  const isValidEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone); // 10 digits phone number

  // Password validation
  const isValidPassword = (password) => password.length >= 8;

  // Handle registration
  const handleRegister = () => {
    if (
      userInfo.name &&
      userInfo.email &&
      userInfo.phone &&
      userInfo.password &&
      userInfo.email === userInfo.emailConfirm &&
      userInfo.password === userInfo.confirmPassword &&
      acceptedTerms
    ) {
      if (!isValidEmail(userInfo.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (!isValidPhone(userInfo.phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      if (!isValidPassword(userInfo.password)) {
        alert('Password must be at least 8 characters long.');
        return;
      }

      setIsLoggedIn(true);
      setIsRegistering(false); // After successful registration, allow login
      alert('Registration successful! You are now logged in.');
    } else {
      alert('Please fill in all fields, confirm your email, and accept the terms and conditions to register.');
    }
  };

  // Proceed to payment (only after login)
  const handleProceedToPayment = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to the cart first.');
      return;
    }

    if (!isLoggedIn) {
      alert('Please login first!');
    } else {
      setIsProceedingToPayment(true); // Allow user to proceed to payment if logged in
    }
  };

  // Handle payment method selection
  const handlePaymentMethodSelection = (method) => {
    setPaymentMethod(method);
  };

  // Handle payment details input (Card or UPI)
  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // Handle the payment submission (simulate)
  const handlePaymentSubmit = () => {
    if (paymentMethod === 'card') {
      if (!paymentDetails.cardholderName || !paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
        alert('Please fill in all the card details!');
        return;
      }
      alert('Card payment successful!');
    } else if (paymentMethod === 'upi') {
      if (!paymentDetails.upiId) {
        alert('Please enter your UPI ID!');
        return;
      }
      alert('UPI payment successful!');
    } else {
      alert('Please select a payment method!');
      return;
    }

    // Payment process does not require the pilot code anymore
    if (paymentDetails.pilotCode) {
      // If pilot code is provided, you can handle it (for example, apply a discount, etc.)
      alert(`Pilot code entered: ${paymentDetails.pilotCode}`);
    }

    setPaymentStatus('Payment successful! Your items are now in your dashboard.');
    // Proceed to add purchased items to the user’s dashboard (simulated)
    navigate('/trainee-dashboard', { state: { purchasedItems: cart } });
  };

  const handleUnlockProject = (project) => {
    // Navigate to the payment page or show the payment modal
    alert(`Proceeding to payment for unlocking: ${project.title}`);
    setCart([...cart, project]); // Automatically add to cart for payment
    setIsProceedingToPayment(true); // Allow payment
  };

  const viewProjectContent = (project) => {
    // Display the content of the project
    alert(`Viewing content for: ${project.title}`);
  };

  return (
    <div className="training-cell-container">
      <h1>Training Cell</h1>
      <div className="training-cell-layout">
        {/* Left side: Sidebar for sections */}
        <div className="training-cell-sidebar">
          <button onClick={() => setSelectedSection('projects')}>Projects</button>
          <button onClick={() => setSelectedSection('guides')}>Comprehensive Study Guides</button>
          <button onClick={() => setSelectedSection('bundles')}>Learner's Bundles</button>
        </div>

        {/* Right side: Content based on selected section */}
        <div className="training-cell-content">
          {selectedSection === 'projects' && (
            <div>
              <h2>Projects</h2>
              <div className="projects-category">
                <button onClick={() => setSelectedProjectsCategory('diploma')}>Diploma Student Projects</button>
                <button onClick={() => setSelectedProjectsCategory('bachelor')}>Bachelor Student Projects</button>
                <button onClick={() => setSelectedProjectsCategory('postGraduate')}>Post Graduate Student Projects</button>
              </div>

              {selectedProjectsCategory && (
                <div>
                  <h3>{selectedProjectsCategory} Projects</h3>
                  <ul>
                    {projectsData[selectedProjectsCategory].map((project, index) => (
                      <li key={index}>
                        <span>{project.title} - ₹{project.price}</span>
                        {project.locked ? (
                          <button onClick={() => handleUnlockProject(project)}>Pay to Unlock</button>
                        ) : (
                          <button onClick={() => viewProjectContent(project)}>View Content</button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {selectedSection === 'guides' && (
            <div>
              <h2>Comprehensive Study Guides</h2>
              <button onClick={() => setSelectedGuides(true)}>View Available Guides</button>
              {selectedGuides && (
                <div>
                  <ul>
                    {guidesData.map((guide, index) => (
                      <li key={index}>
                        <span>{guide.title} - ₹{guide.price}</span>
                        <button onClick={() => addToCart(guide)}>Add to Cart</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {selectedSection === 'bundles' && (
            <div>
              <h2>Learner's Bundles</h2>
              <button onClick={() => setSelectedBundles(true)}>View Available Bundles</button>
              {selectedBundles && (
                <div>
                  <ul>
                    {bundlesData.map((bundle, index) => (
                      <li key={index}>
                        <span>{bundle.title} - ₹{bundle.price}</span>
                        <p>{bundle.description}</p>
                        <button onClick={() => addToCart(bundle)}>Add to Cart</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h3>Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title || item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
      )}

      {/* Login / Registration Section */}
      {cart.length > 0 && !isLoggedIn && !isRegistering && (
        <div className="login-section">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsRegistering(true)}>Register as Trainee</button>
          </p>
        </div>
      )}

      {/* Registration Form (Only Show if User Wants to Register) */}
      {isRegistering && (
        <div className="registration-section">
          <h2>Register as a Trainee</h2>
          <input
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <input
            type="email"
            placeholder="Confirm Email"
            value={userInfo.emailConfirm}
            onChange={(e) => setUserInfo({ ...userInfo, emailConfirm: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={userInfo.confirmPassword}
            onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
          />
          <div>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label>I accept the terms and conditions</label>
          </div>
          <button onClick={handleRegister} disabled={!acceptedTerms}>Register</button>
        </div>
      )}

      {/* Payment Section */}
      {isProceedingToPayment && isLoggedIn && (
        <div className="payment-section">
          <h2>Payment Method</h2>
          <button onClick={() => handlePaymentMethodSelection('card')}>Pay with Card</button>
          <button onClick={() => handlePaymentMethodSelection('upi')}>Pay with UPI</button>

          {paymentMethod === 'card' && (
            <div>
              <input
                type="text"
                placeholder="Cardholder Name"
                name="cardholderName"
                value={paymentDetails.cardholderName}
                onChange={handlePaymentChange}
              />
              <input
                type="text"
                placeholder="Card Number"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
              />
              <input
                type="text"
                placeholder="Expiry Date"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
              />
              <input
                type="text"
                placeholder="CVV"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
              />
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div>
              <input
                type="text"
                placeholder="UPI ID"
                name="upiId"
                value={paymentDetails.upiId}
                onChange={handlePaymentChange}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Enter Pilot Code (Optional)"
              name="pilotCode"
              value={paymentDetails.pilotCode}
              onChange={handlePaymentChange}
            />
          </div>

          <button onClick={handlePaymentSubmit}>Submit Payment</button>
        </div>
      )}

      {/* Payment Status */}
      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </div>
  );
};

export default TrainingCell;
