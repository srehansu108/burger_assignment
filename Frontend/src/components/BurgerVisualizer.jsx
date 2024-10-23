// src/components/BurgerVisualizer.jsx
import React from 'react';
import './BurgerVisualizer.css';

const sliceColors = {
  'aloo-tikki': '#FFCC00',
  'cheese': '#FFD700',
  'paneer': '#FFA500',
};

const BurgerVisualizer = ({ burger }) => {
  return (
    <div className="burger-visualizer">
      <div className="bread-top">Bread</div>
      {burger.map((slice, index) => (
        <div
          key={index}
          className="burger-slice"
          style={{ backgroundColor: sliceColors[slice] }}
        >
          {slice}
        </div>
      ))}
      <div className="bread-bottom">Bread</div>
    </div>
  );
};

export default BurgerVisualizer;
