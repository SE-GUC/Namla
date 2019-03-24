const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            question: Joi.string().min(1).max(250)
        }
        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            question: Joi.string().min(3).max(250) 
        }
        return Joi.validate(request, updateSchema)
    }, 
}