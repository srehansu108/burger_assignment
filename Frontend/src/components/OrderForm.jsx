// src/components/OrderForm.jsx
import React from 'react';
import './OrderForm.css';

const OrderForm = ({ addSlice, removeSlice }) => {
  return (
    <div className="order-form">
      <h1>Customize Your Burger</h1>
      <div className="slice-buttons">
        <button onClick={() => addSlice('aloo-tikki')}>Add Aloo Tikki</button>
        <button onClick={() => addSlice('cheese')}>Add Cheese</button>
        <button onClick={() => addSlice('paneer')}>Add Paneer</button>
      </div>
      <div className="slice-buttons">
        <button onClick={() => removeSlice('aloo-tikki')}>Remove Aloo Tikki</button>
        <button onClick={() => removeSlice('cheese')}>Remove Cheese</button>
        <button onClick={() => removeSlice('paneer')}>Remove Paneer</button>
      </div>
    </div>
  );
};

export default OrderForm;
