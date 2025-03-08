require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  PAYMENT_API_KEY: process.env.PAYMENT_API_KEY,
};
