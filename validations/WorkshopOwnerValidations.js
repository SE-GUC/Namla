const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Description: Joi.string().min(3).max(500).required(),
            Contact: Joi.string().min(3).max(100).required(),
        }
        return Joi.validate(request, createSchema)
    } 
}