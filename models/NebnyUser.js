const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const NebnyUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = NebnyUser = mongoose.model('NebnyUser', NebnyUserSchema)