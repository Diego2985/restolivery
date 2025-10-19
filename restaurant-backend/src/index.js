// index.js
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("TU_CLAVE_STRIPE"); // API KEY de Stripe

const app = express();
app.use(cors());
app.use(express.json());

// Ejemplo de endpoint de productos
app.get("/api/menu", (req, res) => {
  res.json([
    { id: 1, name: "Pizza Margarita", price: 1200 },
    { id: 2, name: "Hamburguesa Doble", price: 1500 },
  ]);
});

// Endpoint de pago con Stripe
app.post("/api/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("Backend en http://localhost:4000"));
