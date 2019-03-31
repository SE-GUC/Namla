// Dependencies

const express = require('express');

const Joi = require('joi');

const uuid = require('uuid');

const router = express.Router();
const validator = require('../../validations/confirmationmessageValidation');
const NebnyAdmin = require('../../models/NebnyAdmin');

// Models

const confirmationmessage = require('../../models/confirmationmessage');


// Create a new confirmationmessage
router.post('/:id1', async (req,res) => {
	try {
	 const NebnyAdminn = await NebnyAdmin.findById(req.params.id1)
	 if(!NebnyAdminn) return res.status(404).send({error: 'NebnyAdmin not found, Can not create a confirmation message'}) 

	 const isValidated = validator.createValidation(req.body)
	 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	 const newconfirmationmessage = await confirmationmessage.create(req.body)
	 res.json({msg:'Confirmation Message was created successfully', data: newconfirmationmessage})
	}
	catch(error) {
		// We will be handling the error later
		console.log(error)
	}  
 })

 


module.exports = router;