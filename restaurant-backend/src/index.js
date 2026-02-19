const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// Endpoint menú
app.get("/api/menu", (req, res) => {
  res.json([
    { id: 1, name: "Pizza Margarita", price: 1200 },
    { id: 2, name: "Hamburguesa Doble", price: 1500 }
  ]);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
