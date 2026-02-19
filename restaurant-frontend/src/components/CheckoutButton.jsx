import React, { useState } from 'react';
import { API_URL } from '../config';
import { useCart } from '../context/CartContext';

const CheckoutButton = () => {
  const { cart, clearCart } = useCart(); // 🛒 usamos el contexto
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return; // 🚫 evitar checkout vacío
    setLoading(true);

    try {
      // ⚡ Simulación de llamada a backend / Stripe
      const response = await fetch(`${API_URL}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // 🔗 redirige a Stripe u otro servicio de pago
      } else {
        alert('✅ Compra confirmada (simulada)');
        clearCart(); // 🔄 vacía carrito
      }
    } catch (error) {
      console.error('Error en el checkout:', error);
      alert('❌ Error en el proceso de pago');
    }

    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={cart.length === 0 || loading}
      style={{
        padding: '12px 24px',
        backgroundColor: cart.length === 0 || loading ? '#ccc' : '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: cart.length === 0 || loading ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s',
      }}
    >
      {loading ? 'Procesando...' : 'Confirmar compra'}
    </button>
  );
};

export default CheckoutButton;
