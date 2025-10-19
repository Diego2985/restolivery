// src/components/Menu.js
import React from "react";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const { addToCart } = useCart();

  const menuItems = [
    { id: 1, name: "Pizza Margarita", price: 2500 },
    { id: 2, name: "Hamburguesa Completa", price: 3000 },
    { id: 3, name: "Empanadas x6", price: 1800 },
  ];

  return (
    <div className="menu">
      <h2>Menú del día</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => addToCart(item)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
