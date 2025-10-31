import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./css/Home.css";
import Menu from "../components/Menu";
import Carrito from "../components/Carrito";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const productos = [
    { id: 1, nombre: "Pizza Margarita", precio: 2500 },
    { id: 2, nombre: "Hamburguesa Completa", precio: 3000 },
    { id: 3, nombre: "Empanadas x6", precio: 1800 },
  ];

  return (
    <>
      {/* Hero Section con fondo e introducción */}
      <section className="home-hero">
        <div className="overlay">
          <h1 className="hero-title">Bienvenido a Restolivery 🍽️</h1>
          <p className="hero-subtitle">
            Disfrutá los mejores sabores, directo a tu puerta.
          </p>
        </div>
      </section>

      {/* Contenido principal con menú y carrito */}
      <main className="home-container">
        <h2 className="home-title">Menú del día 🍽️</h2>
        <div className="home-content">
          <Menu productos={productos} addToCart={addToCart} />
          <Carrito />
        </div>
      </main>
    </>
  );
};

export default Home;
