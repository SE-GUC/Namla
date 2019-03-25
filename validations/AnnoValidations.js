const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string(),
            details: Joi.string()
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string(),
            details: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}