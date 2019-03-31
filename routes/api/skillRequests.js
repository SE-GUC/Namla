const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const NebnyUser = require('../../models/NebnyUser')

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


router.post('/;id1', async (req,res) => {
    try {
        const NebnyUserr = await NebnyUser.findById(req.params.id1)
    if(!NebnyUserr) return res.status(404).send({error: 'NebnyUser not found'})

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

 router.delete('/:id1', async (req,res) => {
    try {
        const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
        if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found'})      
   
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