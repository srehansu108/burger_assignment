// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerMobile: {
    type: String,
    required: true,
  },
  burgerSlices: {
    type: Array,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderNumber: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
