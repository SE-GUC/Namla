const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const WorkshopOwner = require ('../../models/WorkshopOwner');
const validator = require('../../validations/WorkshopOwnerValidations')

WorkshopOwnerId=0;
function WorkshopOwnerNextId(){
    return WorkshopOwnerId++;
};


router.get('/', async (req,res) => {
    const WorkshopOwners = await WorkshopOwner.find()
    res.json({data: WorkshopOwners})
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     var newW= {
         Description : req.body.Description,
         Contact : req.body.Contact,
         id : WorkshopOwnerNextId()
     }
     const newWorkshopOwner = await WorkshopOwner.create(newW)
     res.json({msg:'WorkshopOwner was created successfully', data: newWorkshopOwner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.get('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const workshopOwner = await WorkshopOwner.findById(id)
     res.json({data: workshopOwner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 module.exports = router; 