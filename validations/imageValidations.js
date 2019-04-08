const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            length: Joi.number().min(1).max(1000000).required(),
            type: Joi.string().min(1).max(110).required()
        }

        return Joi.validate(request, createSchema)
    }
}