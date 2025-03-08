// src/components/Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Assuming we store cart items in localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart__items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart__item">
              <span>{item.title}</span>
              <span>₹{item.price}</span>
            </div>
          ))
        )}
      </div>
      <div className="cart__total">
        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
      <div className="cart__actions">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed to Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
