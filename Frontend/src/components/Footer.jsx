// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Burger Builder App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
