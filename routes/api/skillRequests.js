const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const SkillRequest = require ('../../models/SkillRequest');
const validator = require('../../validations/SkillRequestValidations')

SkillRequestId=0;
function SkillRequestNextId(){
    return SkillRequestId++;
};

router.get('/', async (req,res) => {
    const SkillRequests = await SkillRequest.find()
    res.json({data: SkillRequests})
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     var newS= {
         Skill : req.body.Skill,
         id : SkillRequestNextId()
     }
     const newSkillRequest = await SkillRequest.create(newS)
     res.json({msg:'SkillRequest was created successfully', data: newSkillRequest})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedSkillRequest = await SkillRequest.findByIdAndRemove(id)
     res.json({msg:'SkillRequest was deleted successfully', data: deletedSkillRequest})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.get('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const skillRequest = await SkillRequest.findById(id)
     res.json({data: skillRequest})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
module.exports = router;