const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const NebnyAdminSchema = new Schema({
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
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = NebnyAdmin = mongoose.model('NebnyAdmin', NebnyAdminSchema)