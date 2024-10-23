const express = require('express');
const { createOrder, getOrderDetailsById } = require('../Controller/orderController');

const router = express.Router();

// POST /api/orders - Create a new order
router.post('/orders', createOrder);

// GET /api/orders/:id - Get order details by ID
router.get('/orders/:id', getOrderDetailsById); 

module.exports = router;
