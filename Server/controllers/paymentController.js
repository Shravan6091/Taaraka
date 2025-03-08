const axios = require('axios');
const { PAYMENT_API_KEY } = require('../config/config');
const db = require('../config/db'); // Assuming you are using a local MySQL database

// Mocked response for successful payment (for testing purposes)
const mockSBIResponse = {
  status: 'SUCCESS',
  message: 'Payment successful',
  transactionId: 'TX1234567890',
  amount: '500.00',
  orderId: 'ORD123456',
};

exports.processPayment = async (req, res) => {
  const { paymentMethod, amount, cardDetails, upiId, userId, orderId, pilotCode } = req.body;

  // Trial run: Simulate successful response
  // We'll use a mock response for the trial run and disable the actual payment processing.
  
  if (process.env.NODE_ENV === 'development') {
    // Simulate a payment success for trial run
    return res.status(200).json({
      message: 'Trial payment successful (mocked)',
      transactionId: mockSBIResponse.transactionId,
      orderId: orderId,
      amount: mockSBIResponse.amount,
    });
  }

  if (!amount || !userId || !orderId) {
    return res.status(400).json({ error: 'Amount, User ID, and Order ID are required' });
  }

  try {
    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber || !cardDetails.cvv || !cardDetails.expiryDate) {
        return res.status(400).json({ error: 'Card details are incomplete' });
      }

      // Commented out the real API call for the trial run
      /*
      const sbiRequestPayload = {
        merchantId: process.env.SBI_MERCHANT_ID,
        transactionId: `TX-${Date.now()}`,
        amount: amount,
        cardNumber: cardDetails.cardNumber,
        cvv: cardDetails.cvv,
        expiryDate: cardDetails.expiryDate,
        orderId: orderId,
        paymentApiKey: PAYMENT_API_KEY,
      };

      const sbiPaymentResponse = await axios.post('https://api.sbiepay.com/transaction', sbiRequestPayload);
      */

      // For trial, we'll simulate the success response:
      const sbiPaymentResponse = mockSBIResponse;

      if (sbiPaymentResponse.status === 'SUCCESS') {
        res.status(200).json({
          message: 'Payment successful via SBIePay (mocked)',
          transactionId: sbiPaymentResponse.transactionId,
          orderId: orderId,
        });
      } else {
        res.status(400).json({ error: 'Payment failed', message: sbiPaymentResponse.message });
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId) {
        return res.status(400).json({ error: 'UPI ID is required for UPI payments' });
      }

      // Simulating UPI payment success for trial run
      res.status(200).json({
        message: 'Payment successful via UPI (mocked)',
        upiId: upiId,
        orderId: orderId,
      });
    } else {
      res.status(400).json({ error: 'Invalid payment method' });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Internal server error while processing payment' });
  }
};

// Optionally, add other functions for your cart logic, user authentication, etc., but keep them commented out if not needed during the trial run.
