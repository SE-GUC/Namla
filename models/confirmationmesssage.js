const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const MSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    to: {
        type: String, 
        required: true
    },
    NebnyAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'NebnyAdmin'
    }
})
module.exports = confirmationmessage = mongoose.model('confirmationmessage',MSchema)
