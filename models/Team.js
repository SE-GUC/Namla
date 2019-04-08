const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema({
    name: String,
    children: [String],
    NebnyAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'NebnyAdmin'
    }
})

module.exports = mongoose.model('team', Team)