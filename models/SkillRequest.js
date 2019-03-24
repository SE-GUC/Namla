const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillRequestSchema = new Schema({
    Skill : {
        type : String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})


module.exports = SkillRequest = mongoose.model('skillRequests', SkillRequestSchema)