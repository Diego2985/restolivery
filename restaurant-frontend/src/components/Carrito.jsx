// src/components/Carrito.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>🛍️ El carrito está vacío</p>;
  }

  return (
    <div className="carrito-container">
      <h3>Tu pedido</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x{item.quantity} — ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <h4>
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h4>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Carrito;
