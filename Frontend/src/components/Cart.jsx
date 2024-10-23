// src/components/Cart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';

const Cart = ({ burger, totalPrice, quantity, updateQuantity }) => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleQuantityChange = (e) => {
    updateQuantity(Number(e.target.value));
  };

  const handleCheckout = async () => {
    const mobileNumber = prompt("Please enter your mobile number:");

    // Validate mobile number
    if (!mobileNumber || !mobileNumber.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true); 
    setError(null); 

    // Calculate final price
    const finalPrice = totalPrice * quantity;

    // Log the data being sent
    console.log('Sending the following data to the server:', {
      burgerSlices: burger,
      totalPrice,
      quantity,
      customerMobile: mobileNumber,
      finalPrice,
    });

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          burgerSlices: burger, 
          totalPrice,
          quantity,
          customerMobile: mobileNumber,
          finalPrice,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setOrderSuccess(true);
        if (responseData.order && responseData.order.orderNumber) {
          alert(`Order placed successfully! Your order number is: ${responseData.order.orderNumber}`);
        } else {
          alert('Order was placed, but no order number was returned.');
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to place order.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleDetailsNavigation = () => {
    navigate('/details'); // Programmatically navigate to the details page
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="burger-summary">
        <p>Total Slices: {burger.length}</p>
        <p>Total Price (for 1 burger): ₹{totalPrice}</p>
        <p>Total Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </p>
        <p>Final Price: ₹{totalPrice * quantity}</p>
      </div>
      <button
        className="checkout-button"
        onClick={handleCheckout}
        disabled={loading}
      >
        Checkout
      </button>
      <button 
        className="checkout-button" 
        onClick={handleDetailsNavigation} // Navigate to details page
      >
        Get Details
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Cart;
