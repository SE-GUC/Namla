const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(100).required(),
            password: Joi.string().min(4).max(10).required(),
            age: Joi.number().min(1).max(110).required(),
            type: Joi.string().min(1).max(110).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            email: Joi.string().min(3).max(100),
            password: Joi.string().min(4).max(10),
            age: Joi.number().min(1).max(110),
            type: Joi.string().min(1).max(110).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}