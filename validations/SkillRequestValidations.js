const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Skill: Joi.string().min(3).max(500).required()
        }
        return Joi.validate(request, createSchema)
    } 
}