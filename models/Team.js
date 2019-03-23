const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema({
    name: String,
    children: [String]
})

module.exports = mongoose.model('team', Team)