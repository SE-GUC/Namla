const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const sbox = require('../../models/Suggestionbox')
const validator = require('../../validations/SuggestionboxValidations')

router.get('/', async (req,res) => {
    const subox = await sbox.find()
    res.json(subox)
})


// Create a suggestionbox 
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newsbox = await sbox.create(req.body)
    res.json({msg:'sboxwas created successfully', data: newsbox})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a suggestionbox
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const subox = await sbox.findById(id)
    //  if(!subox) return res.status(404).send({error: 'suggestion box does not exist'})
    //  const isValidated = validator.updateValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedSuggestionbox = await sbox.findByIdAndUpdate(id,req.body)
     res.json({msg: ' suggestion box updated successfully',updatedSuggestionbox})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
   // delete a suggestionbox
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedSuggestion = await sbox.findByIdAndRemove(id)
     res.json({msg:'Suggestion box was deleted successfully', data: deletedSuggestion})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router