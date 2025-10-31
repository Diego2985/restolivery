import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito en cualquier componente
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🟢 Agregar al carrito
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // 🔴 Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🗑️ Vaciar carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
