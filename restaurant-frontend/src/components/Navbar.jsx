// src/components/Navbar.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "./css/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  // Total de productos (sumando cantidades)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Restolivery 🍽️</div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menú</a></li>
        <li><a href="/cart">Carrito</a></li>
      </ul>

      <div className="navbar-cart">
        🛒
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
