import React, { useState } from "react";
import "./css/Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: ""
  });

  // Simulación de carrito (después podés conectarlo a tu context)
  const carrito = [
    { id: 1, nombre: "Hamburguesa", precio: 3500 },
    { id: 2, nombre: "Papas Fritas", precio: 1500 }
  ];

  const subtotal = carrito.reduce((acc, item) => acc + item.precio, 0);
  const envio = 800;
  const total = subtotal + envio;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra confirmada 🎉");
    console.log("Datos del cliente:", formData);
  };

  return (
    <div className="checkout-wrap">
      <h1>Finalizar Compra</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Nombre Completo
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="tuemail@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dirección
          <input
            type="text"
            name="direccion"
            placeholder="Calle 123..."
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono
          <input
            type="tel"
            name="telefono"
            placeholder="11 2345 6789"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </label>

        {/* RESUMEN */}
        <div className="checkout-resumen">
          {carrito.map((item) => (
            <div key={item.id} className="cr-row">
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
          ))}

          <div className="cr-row">
            <span>Envío</span>
            <span>${envio}</span>
          </div>

          <div className="cr-row total">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button type="submit" className="confirm-btn">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
