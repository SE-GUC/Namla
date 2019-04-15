const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            content: Joi.string().min(3).max(500).required(),
            to: Joi.string().min(3).max(100).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            content: Joi.string().min(3).max(500),
            to: Joi.string().min(3).max(100)
        }

        return Joi.validate(request, updateSchema)
    }, 
}