// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');  
const orderRoutes = require('./Router/orderRoutes');  
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());                // Enable CORS for cross-origin requests
app.use(express.json());         // Parse incoming JSON payloads

// Routes
app.use('/api', orderRoutes);    // Use order routes for the /api path

// Basic home route to test server
app.get('/', (req, res) => {
  res.send('Burger Backend API is running!');
});

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
