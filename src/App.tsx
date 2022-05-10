import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardsProduct from './components/cardProduct/CardsProduct';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="" element={<CardsProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
