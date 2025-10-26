import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  return (
    <nav className="w-full text-center bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 md:justify-around">
        
        <Link to="/" className="text-[40px] flex items-center font-bold text-gray-800">
          <span>Shah's</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
          
          <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative">
            Cart
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>
          
        </div>

        <button
          className="text-[40px] md:hidden font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t z-50 absolute w-full left-0">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Products</Link>
           
            <Link to="/cart" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Cart</Link>
           
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
