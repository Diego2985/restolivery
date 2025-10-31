// src/pages/Cancel.jsx
import React from "react";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";
import "../pages/css/SuccessCancel.css";

const Cancel = () => {
  return (
    <motion.div
      className="result-container cancel"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <XCircle className="icon cancel-icon" size={80} />
      <h2>Pago cancelado 😕</h2>
      <p>No te preocupes, podés intentarlo nuevamente cuando quieras.</p>
      <a href="/" className="btn-volver">Volver al inicio</a>
    </motion.div>
  );
};

export default Cancel;
