// src/components/Carrito.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./css/Carrito.css";

const Carrito = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((s, it) => s + (it.price * (it.quantity || 1)), 0);

  const changeQty = (item, delta) => {
    // reemplazamos: eliminar y re-agregar con cantidad modificada
    const newQty = (item.quantity || 1) + delta;
    // simple approach: remove and add updated (your CartContext could have update function)
    updateQuantity(item.id, Math.max(1, newQty));
  };

  return (
    <main>
    <div className="cart-page">
      <h1 className="cart-title">Tu carrito</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío.</p>
          <button onClick={() => navigate("/menu")}>Ver menú</button>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="ci-info">
                  <strong>{item.name}</strong>
                  <div className="ci-qty">
                    <button onClick={() => changeQty(item, -1)}>-</button>
                    <div>{item.quantity || 1}</div>
                    <button onClick={() => changeQty(item, 1)}>+</button>
                  </div>
                </div>
                <div className="ci-right">
                  <span className="ci-price">${(item.price * (item.quantity || 1)).toFixed(0)}</span>
                  <button className="ci-remove" onClick={() => removeFromCart(item.id)}>Quitar</button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 18 }}>
              <button className="clear-btn" onClick={() => clearCart()}>Vaciar carrito</button>
            </div>
          </div>

          <aside className="cart-summary">
            <h3>Resumen</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(0)}</span>
            </div>
            <div className="summary-row">
              <span>Envío</span>
              <span>$300</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${(total + 300).toFixed(0)}</span>
            </div>

            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Finalizar compra
            </button>                 
          
          </aside>
        </div>
      )}
    </div>
    </main>
  );
};

export default Carrito;
