import axios from 'axios';

// Base URL for your API
const API_URL = 'http://your-api-url.com'; // Replace this with your actual API URL

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // return the response data if successful
  } catch (error) {
    console.error('Error registering user', error);
    throw error; // Propagate the error so you can handle it in the calling code
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // return the response data (e.g., token) if successful
  } catch (error) {
    console.error('Error logging in user', error);
    throw error; // Propagate the error for handling in the calling code
  }
};

// Function to send a verification email
export const sendVerificationEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/send-verification-email`, { email });
    return response.data; // Assuming the response contains success message
  } catch (error) {
    console.error('Error sending verification email', error);
    throw error; // Propagate the error for handling in the calling code
  }
};

// You can also define other common HTTP methods here
export const get = async (url) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error('Error with GET request', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await axios.post(`${API_URL}${url}`, data);
    return response.data;
  } catch (error) {
    console.error('Error with POST request', error);
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await axios.put(`${API_URL}${url}`, data);
    return response.data;
  } catch (error) {
    console.error('Error with PUT request', error);
    throw error;
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await axios.delete(`${API_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error('Error with DELETE request', error);
    throw error;
  }
};
