const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const products = [
  { id: 1, name: "Valorant Points", price: 450 },
  { id: 2, name: "iTunes US Card", price: 1200 },
  { id: 3, name: "PUBG Mobile UC", price: 85 },
  { id: 4, name: "PlayStation Plus", price: 3450 },
];

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`S3ADA backend running on http://localhost:${PORT}`);
});