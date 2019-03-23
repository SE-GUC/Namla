const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            confirmed: Joi.boolean(),
            totalPrice: Joi.number()
            
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            confirmed: Joi.boolean(),
            totalprice: Joi.number()
            
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}