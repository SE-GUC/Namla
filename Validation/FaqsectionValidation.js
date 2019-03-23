module.exports = {
    createValidation: request => {
        const createSchema = {
            question: Joi.string().min(1).max(500)
        }
        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            question: Joi.string().min(3).max(500) 
        }
        return Joi.validate(request, updateSchema)
    }, 
}