const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string(),
            category: Joi.string(),
            price: Joi.number()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            category: Joi.string(),
            price: Joi.number()
        }

        return Joi.validate(request, updateSchema)
    }, 
}