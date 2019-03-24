const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Announcemenet = require('../../models/Announcement')
const validator = require('../../validations/AnnoValidations')

router.get('/', async (req,res) => {
    const Ann = await Announcemenet.find()
    res.json(Ann)
})


// Create 
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const Ann = await Announcemenet.create(req.body)
    res.json({msg:'Announcement was created successfully', Ann})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const Ann = await Announcemenet.findByIdAndUpdate(id)
     if(!Ann) return res.status(404).send({error: 'Announcement does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAnn = await Announcemenet.findByIdAndUpdate(id,req.body)
     res.json({msg: 'Announcement updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAnn = await Announcemenet.findByIdAndRemove(id)
     res.json({msg:'Announcemnet was deleted successfully', deletedAnn})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 

module.exports = router