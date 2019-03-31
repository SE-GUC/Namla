// Dependencies
const express = require("express");
const Joi = require("joi");

const router = express.Router();
const mongoose = require('mongoose')


// Models
const Cart = require("../../models/Cart");
const validator = require('../../validations/cartValidations')
// temporary data created as if it was pulled out of the database ...


// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get("/", (req, res) => res.json({ data: Cart }));

router.get("/:id", (req, res) => {
  const Cart = Cart.find(c => c.id === parseInt(req.params.id));

  if (!Cart) return res.status(404).send(`There is no Cart with such id`);

  res.send(Cart);
});

// Create a new user
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newCart = await Cart.create(req.body)
   res.json({msg:'Cart was created successfully', data: newCart})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const cart = await Cart.findOne({id})
   if(!cart) return res.status(404).send({error: 'Cart does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedCart = await Cart.updateOne(req.body)
   res.json({msg: 'Cart updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedCart = await Cart.findByIdAndRemove(id)
   res.json({msg:'Cart was deleted successfully', data: deletedCart})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

module.exports = router;
