// src/pages/MenuItemDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./css/MenuItemDetail.css";

const menuItems = [
  {
    id: 1,
    name: "Pizza Margarita",
    price: 18500,
    img: "/images/Imagen1.jpg",
    desc: "Pizza clásica italiana con salsa de tomate, mozzarella fresca y hojas de albahaca.",
    ingredientes: ["Masa casera", "Mozzarella", "Tomate", "Albahaca"],
  },
  {
    id: 2,
    name: "Hamburguesa Gourmet",
    price: 10000,
    img: "/images/Imagen2.jpg",
    desc: "Hamburguesa premium con carne jugosa, pan brioche, cheddar y cebolla caramelizada.",
    ingredientes: ["Carne premium", "Pan brioche", "Cheddar", "Cebolla"],
  },
  {
    id: 3,
    name: "Empanadas x6",
    price: 12000,
    img: "/images/Imagen3.jpg",
    desc: "Empanadas al horno, receta tradicional con relleno casero.",
    ingredientes: ["Carne", "Cebolla", "Aceitunas", "Huevo"],
  },
];

const MenuItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // buscar el plato
  const item = menuItems.find((p) => p.id === Number(id));

  if (!item) {
    return (
      <div className="mid-container">
        <h2>Plato no encontrado</h2>
        <button onClick={() => navigate("/menu")} className="mid-back">
          Volver al menú
        </button>
      </div>
    );
  }

  return (
    <main className="mid-container">
      <button className="mid-back" onClick={() => navigate("/menu")}>
        ← Volver
      </button>

      <div className="mid-card">
        <div className="mid-imgwrap">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="mid-info">
          <h1>{item.name}</h1>
          <p className="mid-desc">{item.desc}</p>

          <h3>Ingredientes</h3>
          <ul className="mid-list">
            {item.ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <div className="mid-footer">
            <span className="mid-price">${item.price}</span>

            <button className="mid-add">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuItemDetail;
