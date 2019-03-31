const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
 
const Product = require('../../models/Product')
const validator = require('../../validations/productValidations')

router.get('/', async (req,res) => {
    const products = await Product.find()
    res.json(products)
})


// Create a product
router.post('/;id1', async (req,res) => {
   try {
    const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
    if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found'})      

    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newProduct = await Product.create(req.body)
    res.json({msg:'Product was created successfully', newProduct})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a product
router.put('/:id/:id1', async (req,res) => {
    try {
        const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
        if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found'})      
    
    
     const id = req.params.id
     const product = await Product.findById(id)
     if(!product) return res.status(404).send({error: 'Product does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedProduct = await Product.findByIdAndUpdate(id,req.body)
     res.json({msg: 'Product updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id;id1', async (req,res) => {
    try {   
         const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
        if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found'})      
    
    
     const id = req.params.id
     const deletedProduct = await Product.findByIdAndRemove(id)
     res.json({msg:'Product was deleted successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router