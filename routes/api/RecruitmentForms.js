const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const validator = require('../../validations/FormValidations')

const RecruitmentForm = require('../../models/RecruitmentForm')

router.get('/', async (req,res) => {
    const Forms = await RecruitmentForm.find()
    res.json({data: Forms})
})

//Get certain Form
router.get("/:id",async (req, res) => {
    const FormId = req.params.id;
    const neededForm = await RecruitmentForm.findById(FormId)
    res.json({ data: neededForm})
  });

// Create a Form
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newForm = await RecruitmentForm.create(req.body)
    res.json({msg:'Form was created successfully', data: newForm})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a Form
router.put('/update/:id', async (req,res) => {
    try {
     const id = req.params.id
     const { ClientName, address, age,InterviewDate ,InterviewTime }  = req.body

    //  const form = await RecruitmentForm.findOne({id})
    //  if(!form) return res.status(404).send({error: 'Form does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedForm = await RecruitmentForm.updateOne(req.body)
     const RecForm = await RecruitmentForm.findByIdAndUpdate(id,{ClientName, address, age,InterviewDate ,InterviewTime})
     if(!RecForm) return res.status(404).send({error: 'Form does not exist'})
     res.json({msg: 'Form updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedForm = await RecruitmentForm.findByIdAndRemove(id)
     res.json({msg:'Form was deleted successfully', data: deletedForm})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 
module.exports = router
