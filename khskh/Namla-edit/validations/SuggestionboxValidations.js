const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            comment : Joi.string().min(3).max(500).required(),
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            comment: Joi.string().min(3).max(500),
           
        }

        return Joi.validate(request, updateSchema)
    }, 
}