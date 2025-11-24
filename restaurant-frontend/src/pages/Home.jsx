import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const destacados = [
    {
      id: 1,
      nombre: "Pizza Margarita",
      img: "/images/Imagen1.jpg",
    },
    {
      id: 2,
      nombre: "Hamburguesa Completa",
      img: "/images/Imagen2.jpg",
    },
    {
      id: 3,
      nombre: "Empanadas x6",
      img: "/images/Imagen3.jpg",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a RestoLivery 🍽️</h1>
          <p>Sabores caseros, frescos y preparados al instante.</p>
        </div>
      </section>

      {/* Destacados */}
      <section className="destacados">
        <h2>Platos destacados</h2>

        <div className="cards">
          {destacados.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => navigate("/menu")}
            >
              <img src={item.img} alt={item.nombre} />
              <h3>{item.nombre}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
