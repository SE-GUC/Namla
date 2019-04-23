const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Announcemenet = require('../../models/Announcement')
const validator = require('../../validations/AnnoValidations')

//Get
router.get('/', async (req,res) => {
    const Ann = await Announcemenet.find()
    res.json(Ann)
})


// Create 
router.post('/',passport.authenticate('jwt', {session: false}) ,async (req,res) => {
    if(req.user == NebnyAdmin){
    try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const Ann = await Announcemenet.create(req.body)
    res.json({msg:'Announcement was created successfully', Ann})
   }
   catch(error) {
       console.log(error)
   } }
   else{
    return res.status(404).send({error: 'Unauthorized'})
   } 
})

// Update 
router.put('/:id',passport.authenticate('jwt', {session: false}) ,async (req,res) => {
    if(req.user == NebnyAdmin){
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
        console.log(error)
    }  }
    else{
        return res.status(404).send({error: 'Unauthorized'})
       }
 })

 router.delete('/:id',passport.authenticate('jwt', {session: false}) ,async (req,res) =>  {
    if(req.user == NebnyAdmin){
    try {
     const id = req.params.id
     const deletedAnn = await Announcemenet.findByIdAndRemove(id)
     res.json({msg:'Announcemnet was deleted successfully', deletedAnn})
    }
    catch(error) {
        console.log(error)
    }  }
    else{
        return res.status(404).send({error: 'Unauthorized'})
       }
 })

 

module.exports = router