const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    answer: {
        type: String,
        required:true
    },
    question: {
        type: String,
        required:true
    }
})

module.exports = Faqsection = mongoose.model('Faqsection', UserSchema)