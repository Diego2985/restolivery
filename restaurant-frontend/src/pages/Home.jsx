// src/pages/Home.jsx
import React from "react";
import Menu from "../components/Menu";
import Carrito from "../components/Carrito";
import "./css/Home.css";

const sampleProducts = [
  { id: 1, name: "Pizza Margarita", price: 2500, image: "/images/pizza.jpg" },
  { id: 2, name: "Hamburguesa Completa", price: 3000, image: "/images/burger.jpg" },
  { id: 3, name: "Empanadas x6", price: 1800, image: "/images/empanadas.jpg" },
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>Menú del día 🍽️</h2>
      <div className="home-content">
        <Menu products={sampleProducts} />
        <Carrito />
      </div>
    </div>
  );
};

export default Home;
