// src/pages/CheckoutPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="p-4 max-w-5xl mx-auto mt-10">
      <h1 className="text-2xl mb-4 font-semibold text-center">Checkout</h1>

      <div className="mb-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-2 items-center"
            >
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <p className="mt-2 font-semibold text-right">
            Total: ${totalPrice.toFixed(2)}
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl mb-4 text-center font-semibold">Order Now</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded shadow-sm" required />
          <input type="email" placeholder="Email" className="p-2 border rounded shadow-sm" required />
          <input type="text" placeholder="Address" className="p-2 border rounded shadow-sm" required />
          <input type="text" placeholder="City" className="p-2 border rounded shadow-sm" required />
          <input type="text" placeholder="ZIP" className="p-2 border rounded shadow-sm" required />
          <button type="submit" className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
