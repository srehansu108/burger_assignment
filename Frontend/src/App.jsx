// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';
import OrderDetails from './Pages/OrderDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
