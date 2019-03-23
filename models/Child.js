const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Child = new Schema({
    team: String,
    name: String,
    age: Number,
    familyStatus: String,
    educationalLevel: String
})

module.exports = mongoose.model('child', Child)