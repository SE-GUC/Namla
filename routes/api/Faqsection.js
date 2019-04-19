const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Faqsection = require('../../models/Faqsection');
const validator = require('../../models/Faqsection');






router.put('/:id', async (req, res) => {
	try{
	const QQ=req.body.question;
	const Question = req.body.question;
	const Answer = req.body.answer;
	const id=req.params.id;
	if (!Question) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Question !== 'string') return res.status(400).send({ err: 'Invalid value for answer' });

	const newQuestion = await Faqsection.findByIdAndUpdate(id,{Question,Answer});
	if(!newQuestion) return res.status(404).send({error: 'Form does not exist'})

	 res.json({ msg:'faq updated' });
	}
	catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
});

router.delete('/:id', async (req, res) => {

	const id=req.params.id;
	
	const newQuestion = await Faqsection.findByIdAndDelete(id,req.body);
	return res.json({ data: newQuestion });
});


module.exports = router;