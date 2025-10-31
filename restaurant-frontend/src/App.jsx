import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// 🟢 Componentes globales
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

// 🟣 Páginas
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </Router>        
    </CartProvider>
  );
}

export default App;
