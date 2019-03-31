// Dependencies
const express = require("express");
const Joi = require("joi");

const router = express.Router();
const mongoose = require('mongoose')
const Product = require("../../models/Product")

// Models
const Cart = require("../../models/Cart");
const validator = require('../../validations/cartValidations')
// temporary data created as if it was pulled out of the database ...


// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get("/", (req, res) => res.json({ data: Cart }));

router.get("/:id",async (req, res) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart) return res.status(404).send(`There is no Cart with such id`);

  res.send(cart);
});

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
router.put('/:id/:productId', async (req,res) => {
  try {
   const id = req.params.id
   const productId = req.params.productId
   const product = Product.findById(productId)
   if(!product) return res.status(404).send({error: 'Product does not exist'})
   const cart = await Cart.findById(id)

   if(!cart) return res.status(404).send({error: 'Cart does not exist'})
  // const isValidated = validator.updateValidation(req.body)
   //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const cart1 = await Cart.findByIdAndUpdate(id,{$push:{products: productId}})
   
   //const cart2 = await Cart.findByIdAndUpdate(id,{totalPrice: cart.totalPrice + product.price })
   
   res.json({msg: 'Cart updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
router.delete('/:id/:productId', async (req,res) => {
  try {
    const productId = req.params.productId
   const id = req.params.id
   const cart = await Cart.findById(id)
   if (cart.products.indexOf(productId)>-1) {
     const cart1 = await Cart.findByIdAndUpdate(id,{$pull:{products: productId}}, {new: true})
     
    }
   res.json({msg:'Product was deleted successfully', data: cart})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
router.delete('/:id', async (req,res) => {
  try {
    
   const id = req.params.id
   let cart = await Cart.findById(id)
   
    cart = await Cart.findByIdAndUpdate(id,{$set:{products: []}})
     
    
   res.json({msg:'Cart is empty successfully', data: cart})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


module.exports = router;
