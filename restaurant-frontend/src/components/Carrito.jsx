import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./css/Carrito.css";

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <main className="carrito-container">
      <h2 className="carrito-title">🛒 Tu carrito</h2>

      {cart.length === 0 ? (
        <p className="carrito-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-list">
            {cart.map((item) => (
              <li key={item.id} className="carrito-item">
                <div className="carrito-info">
                  <span className="carrito-name">{item.nombre}</span>
                  <span className="carrito-price">${item.precio}</span>
                </div>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="carrito-summary">
            <p className="carrito-total">
              <strong>Total:</strong> ${total}
            </p>
            <div className="carrito-actions">
              <button className="btn-clear" onClick={clearCart}>
                Vaciar carrito 🗑️
              </button>
              <button className="btn-checkout">
                Finalizar compra 💳
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Carrito;
