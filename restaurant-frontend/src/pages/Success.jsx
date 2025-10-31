// src/pages/Success.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "../pages/css/SuccessCancel.css";

const Success = () => {
  return (
    <motion.div
      className="result-container success"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CheckCircle className="icon success-icon" size={80} />
      <h2>¡Compra realizada con éxito! 🎉</h2>
      <p>Gracias por tu compra. En breve recibirás un correo con los detalles.</p>
      <a href="/" className="btn-volver">Volver al inicio</a>
    </motion.div>
  );
};

export default Success;
