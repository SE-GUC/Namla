const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SuggestionBoxSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
})

module.exports =  SuggestionBox= mongoose.model('suggestionBoxes', SuggestionBoxSchema)