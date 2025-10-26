import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import Products from './Pages/Products';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      
        <div className="min-h-screen w-full bg-gray-50 flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-grow w-4/5 m-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      
    </CartProvider>
  );
}

export default App;
