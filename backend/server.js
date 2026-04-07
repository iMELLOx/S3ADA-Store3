const express = require("express");
const cors = require("cors");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const products = [
  { id: 1, name: "Valorant Points", price: 450 },
  { id: 2, name: "iTunes US Card", price: 1200 },
  { id: 3, name: "PUBG Mobile UC", price: 85 },
  { id: 4, name: "PlayStation Plus", price: 3450 },
];

const corsOrigin = process.env.CORS_ORIGIN;
app.use(
  cors(
    corsOrigin
      ? {
          origin: corsOrigin.split(",").map((origin) => origin.trim()),
        }
      : undefined
  )
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`S3ADA backend running on port ${PORT}`);
});
