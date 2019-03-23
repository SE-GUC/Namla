// Dependencies
const express = require("express");
const Joi = require("joi");
const uuid = require("uuid");
const router = express.Router();

// Models
const Cart = require("../../models/Cart");

// temporary data created as if it was pulled out of the database ...
const Carts = [new Cart(1), new Cart(2), new Cart(3)];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get("/", (req, res) => res.json({ data: Carts }));

router.get("/:id", (req, res) => {
  const Cart = Carts.find(c => c.id === parseInt(req.params.id));

  if (!Cart) return res.status(404).send(`There is no Cart with such id`);

  res.send(Cart);
});

// Create a new user
router.post("/", (req, res) => {
  const Cart = {
    id: Carts.length + 1,
    confirmed: false,
    totalPrice: 0,
    products: []
  };
  Carts.push(Cart);

  return res.json({ data: Cart });
});
router.put("/:id", (req, res) => {
  const Cart = Carts.find(c => c.id === parseInt(req.params.id));

  if (!Cart) return res.status(404).send(`There is no Cart with such id`);

  
  Cart.products.push(1), Cart.totalPrice++;
  

  res.send(Cart);
});

module.exports = router;
