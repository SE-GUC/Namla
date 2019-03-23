const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Faqsection = require('../../models/Faqsection');


const validator = require('../../models/Faqsection');



router.get('/', async (req, res) =>
{ 
	const faqsection = await Faqsection.find();
	res.json({data:faqsection});
});

router.get('/:id', async (req, res) =>
{ 
	const faqsection = await Faqsection.findById(req.params.id);
	res.json({data:faqsection});
});


router.post('/', async (req, res) => {
	const Question = req.body.question;

	if (!Question) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Question !== 'string') return res.status(400).send({ err: 'Invalid value for answer' });

	const newQuestion = await Faqsection.create(req.body);
	return res.json({ data: newQuestion });
});


router.put('/:id', async (req, res) => {
	const Question = req.body.question;
	const Answer = req.body.answer;
	const id=req.params.id;
	if (!Question) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Question !== 'string') return res.status(400).send({ err: 'Invalid value for answer' });

	const newQuestion = await Faqsection.findByIdAndUpdate(id,req.body);
	return res.json({ data: newQuestion });
});

router.delete('/:id', async (req, res) => {

	const id=req.params.id;
	
	const newQuestion = await Faqsection.findByIdAndDelete(id,req.body);
	return res.json({ data: newQuestion });
});



module.exports = router;