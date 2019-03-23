// Dependencies

const express = require('express');

const Joi = require('joi');

const uuid = require('uuid');

const router = express.Router();



// Models

const confirmationmessage = require('../../models/confirmationmessage');



// temporary data created as if it was pulled out of the database ...

const confirmationmessage = [

	new confirmationmessage('you successfully chose a slot', 'ahmed'),

	new confirmationmessage('you are on time', 'ashraf'),

	new confirmationmessage('your meeting is updates', 'mohamed'),

	new confirmationmessage('are you fine?', 'mahmoud'),


];



// Get all confirmationmessages

//router.get('/', (req, res) => res.json({ data: confirmationmessages }));



// Create a new confirmationmessage

router.post('/', (req, res) => {

	const content = req.body.content;

	const to = req.body.to;



	if (!content) return res.status(400).send({ err: 'content field is required' });

	if (typeof content !== 'string') return res.status(400).send({ err: 'Invalid value for content' });

	if (!to) return res.status(400).send({ err: 'to field is required' });

	if (typeof to !== 'string') return res.status(400).send({ err: 'Invalid value for to' });



	const newconfirmationmessage = {

		content,

		to,

		id: uuid.v4(),

	};

	return res.json({ data: newconfirmationmessage });

});



router.post('/joi', (req, res) => {

	const content = req.body.content

	const to = req.body.to



	const schema = {

		content: Joi.string().min(10).required(),

		to: Joi.string().min(3).required(),

	}



	const result = Joi.validate(req.body, schema);



	if (result.error) return res.status(400).send({ error: result.error.details[0].message });



	const newconfirmationmessage = {

		content,

		to,

		id: uuid.v4(),

	};

	return res.json({ data: newconfirmationmessage });

});



module.exports = router;