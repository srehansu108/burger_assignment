const Order = require('../Model/orderModel');

// Helper function to generate order number
const generateOrderNumber = async () => {
  const orders = await Order.find({});
  const orderCount = orders.length + 1;
  const orderNumber = `BURG-${orderCount.toString().padStart(3, '0')}`;
  return orderNumber;
};

// Create new order
const createOrder = async (req, res) => {
  const { customerMobile, burgerSlices, quantity, totalPrice, finalPrice } = req.body; 

  // Log the received data for debugging
  console.log('Received order data:', req.body);

  try {
    const orderNumber = await generateOrderNumber();
    
    const newOrder = new Order({
      customerMobile,
      burgerSlices, 
      quantity,
      totalPrice,
      orderNumber,
      finalPrice,
    });
    
    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: 'Order created successfully!',
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get order details by ID
const getOrderDetailsById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findOne({ orderNumber: id }); 
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Export the functions
module.exports = { createOrder, generateOrderNumber, getOrderDetailsById };
