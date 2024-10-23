import React, { useState } from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleFetchOrder = async () => {
    setError('');
    setOrderDetails(null); 

    try {
      const response = await fetch(`http://localhost:5000/api/orders/BURG-${orderId}`); 
      console.log('Response:', response); 

      if (!response.ok) {
        throw new Error('Order not found');
      }

      const data = await response.json();
      console.log('Fetched Data:', data); 
      setOrderDetails(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching order:", err); 
    }
  };

  const handleOrderIdChange = (e) => {
    const value = e.target.value.replace(/BURG-/g, ''); // Remove any existing 'BURG-' prefix
    setOrderId(value); // Update state with the numeric part only
  };

  return (
    <div className="order-details-container">
      <h2>Get Order Details</h2>
      <form className="order-form" onSubmit={(e) => { e.preventDefault(); handleFetchOrder(); }}>
        <div className="input-group">
          <span className="prefix">BURG-</span>
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={handleOrderIdChange}
            className="order-input"
          />
        </div>
        <button type="submit" className="fetch-button">Fetch Order</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {orderDetails && (
        <div className="order-details">
          <h3>Order Details:</h3>
          <p>Order Number: {orderDetails.orderNumber}</p>
          <p>Customer Mobile: {orderDetails.customerMobile}</p>
          <p>Burger Slices: {orderDetails.burgerSlices.join(', ')}</p>
          <p>Quantity: {orderDetails.quantity}</p>
          <p>Total Price: {orderDetails.totalPrice}</p>
          <p>Final Price: {orderDetails.finalPrice}</p>
          <p>Order Date: {new Date(orderDetails.createdAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
