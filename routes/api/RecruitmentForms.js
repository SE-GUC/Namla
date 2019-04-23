const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const validator = require('../../validations/FormValidations')

const RecruitmentForm = require('../../models/RecruitmentForm')
const NebnyUser = require('../../models/NebnyUser')
const NebnyAdmin = require('../../models/NebnyAdmin')

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
router.post('/:id', async (req,res) => {
   try {

    const NebnyUserr = await NebnyUser.findById(req.params.id)
    if(!NebnyUserr) return res.status(404).send({error: 'NebnyUser not found'})

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
router.put('/update/:id1/:id', async (req,res) => {
    try {

     const NebnyUserr = await NebnyUser.findById(req.params.id1)
     if(!NebnyUserr) return res.status(404).send({error: 'NebnyUser not found'})   
     
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
        console.log(error)
    }  
 })

 router.delete('/:id1/:id', async (req,res) => {
    try {

     const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
     const RF = await RecruitmentForm.findById(req.params.id)
     if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found'})      
     if(!RF) return res.status(404).send({error: 'Form not found'})
     const id = req.params.id
     const deletedForm = await RecruitmentForm.findByIdAndRemove(id)
    //  res.json({msg:'Form was deleted successfully', data: deletedForm})
     res.json({msg:'Form was deleted successfully'})

    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 
module.exports = router