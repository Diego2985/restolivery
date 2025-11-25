// src/components/Navbar.jsx
import React, {useEffect, useState} from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import "./css/Navbar.css";
import "./css/CarritoAnimation.css"


const Navbar = () => {
  const { cart } = useCart();
  const [animate , setAnimate] = useState(false);
  const [counterAnimate, setCounterAnimate] = useState (false);


  // 🔥 Cuando el carrito cambia → animar icono y contador
  useEffect(() => {
    if (cart.length === 0) return;

    setAnimate(true);
    setCounterAnimate(true);

    const bounceTimer = setTimeout(() => setAnimate(false), 600);
    const counterTimer = setTimeout(() => setCounterAnimate(false), 400);

    return () => {
      clearTimeout(bounceTimer);
      clearTimeout(counterTimer);
    };
  }, [cart.length]);

  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">Restolivery 🍽️</div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menú</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>

      <div className="cart-wrapper" style={{ position: "relative" }}>
        <ShoppingCart
          className={`cart-icon ${animate ? "cart-bounce" : ""}`}
          size={28}
          onClick={() => (window.location.href = "/cart")}
          style={{ cursor: "pointer" }}
        />

        {/* Contador */}
        {totalItems > 0 && (
          <span className={`cart-counter 
            ${counterAnimate ? "cart-counter-change" : ""} 
            ${totalItems >= 10 ? "pulse" : ""}`}>
            {totalItems}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
