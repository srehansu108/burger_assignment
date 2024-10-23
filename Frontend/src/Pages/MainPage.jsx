import React, { useState } from 'react'
import BurgerVisualizer from '../components/BurgerVisualizer';
import Cart from '../components/Cart';
import OrderForm from '../components/OrderForm';
const MainPage = () => {
    const [burger, setBurger] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);  
  
    const slicePrices = {
      'aloo-tikki': 50,
      'cheese': 30,
      'paneer': 40,
    };
  
    // Add slice
    const addSlice = (sliceType) => {
      setBurger([...burger, sliceType]);
      setTotalPrice(totalPrice + slicePrices[sliceType]);
    };
  
    // Remove slice
    const removeSlice = (sliceType) => {
      const sliceIndex = burger.lastIndexOf(sliceType);
      if (sliceIndex > -1) {
        const updatedBurger = burger.filter((_, index) => index !== sliceIndex);
        setBurger(updatedBurger);
        setTotalPrice(totalPrice - slicePrices[sliceType]);
      }
    };
  
    // Update quantity
    const updateQuantity = (newQuantity) => {
      setQuantity(newQuantity);
    };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f7ff001a', height: '80vh' }}>
          <BurgerVisualizer burger={burger} />
          <div style={{ paddingLeft: '15rem', paddingTop: '3rem', paddingRight: '10rem' }}>
            <OrderForm addSlice={addSlice} removeSlice={removeSlice} />
            <Cart burger={burger} totalPrice={totalPrice} quantity={quantity} updateQuantity={updateQuantity} />
          </div>
    </div>
  )
}

export default MainPage;