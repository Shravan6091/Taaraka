const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cartRoutes = require('./routes/cartRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const itemRoutes = require('./routes/itemRoutes');  // Add item routes here
const purchaseRoutes = require('./routes/purchaseRoutes');  // Add purchase routes here

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);

// Add the item and purchase routes here
app.use('/api/items', itemRoutes);  // For managing items
app.use('/api/purchases', purchaseRoutes);  // For managing purchases

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
