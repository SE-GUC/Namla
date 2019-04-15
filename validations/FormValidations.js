const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            ClientName: Joi.string().min(3).max(500).required(),
            address: Joi.string().min(3).max(100).required(),
            age: Joi.number().min(1).max(110).required(),
            InterviewDate: Joi.string(),
            InterviewTime: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            ClientName: Joi.string().min(3).max(500),
            address: Joi.string().min(3).max(100),
            age: Joi.number().min(1).max(110),
            InterviewDate: Joi.string(),
            InterviewTime: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}