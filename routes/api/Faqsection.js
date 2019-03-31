const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Faqsection = require('../../models/Faqsection');
const validator = require('../../models/Faqsection');






router.put('/:id', async (req, res) => {
	const QQ=req.body.question;
	const Question = req.body.question;
	const Answer = req.body.answer;
	const id=req.params.id;
	if (!Question) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Question !== 'string') return res.status(400).send({ err: 'Invalid value for answer' });

	const newQuestion = await Faqsection.findOneAndUpdate({'_id':id},req.body,{new:true});
	return res.json({ data: newQuestion });
});

router.delete('/:id', async (req, res) => {

	const id=req.params.id;
	
	const newQuestion = await Faqsection.findByIdAndRemove(id);
	return res.json({ data: newQuestion });
});


module.exports = router;