// Dependencies

const express = require('express');

const Joi = require('joi');

const uuid = require('uuid');

const router = express.Router();
const validator = require('../../validations/confirmationmessageValidation');
const NebnyAdmin = require('../../models/NebnyAdmin');

// Models

const confirmationmessage = require('../../models/confirmationmessage');


// Get all confirmationmessages

//router.get('/', (req, res) => res.json({ data: confirmationmessages }));



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
// router.post('/', async (req,res) => {

// 	try {
 
	 
// 		if (!content) return res.status(400).send({ err: 'content field is required' });

// 		if (typeof content !== 'string') return res.status(400).send({ err: 'Invalid value for content' });
	
// 		if (!to) return res.status(400).send({ err: 'to field is required' });
	
// 		if (typeof to !== 'string') return res.status(400).send({ err: 'Invalid value for to' });
	
// 	 const newconfirmationmessage = await confirmationmessage.create(req.body)
 
// 	 res.json({msg:'Confirmationmessage was created successfully', data: newconfirmationmessage})
 
// 	}
 
// 	catch(error) {
 
// 		// We will be handling the error later
 
// 		console.log(error)
 
// 	}


// });



// router.post('/joi', (req, res) => {

// 	const content = req.body.content

// 	const to = req.body.to



// 	const schema = {

// 		content: Joi.string().min(10).required(),

// 		to: Joi.string().min(3).required(),

// 	}



// 	const result = Joi.validate(req.body, schema);



// 	if (result.error) return res.status(400).send({ error: result.error.details[0].message });



// 	const newconfirmationmessage = {

// 		content,

// 		to,

// 		id: uuid.v4(),

// 	};

// 	return res.json({ data: newconfirmationmessage });

// });



module.exports = router;