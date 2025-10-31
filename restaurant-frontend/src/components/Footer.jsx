import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Restolivery. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
