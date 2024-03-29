const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const RecruitmentFormSchema = new Schema({
    ClientName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    InterviewDate: {
        type: String, 
        required: true
    },
    InterviewTime: {
        type: String, 
        required: true
    },
    NebnyUser: {
        type: Schema.Types.ObjectId,
        ref: 'NebnyUser'
    },
    NebnyAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'NebnyAdmin'
    }
})
module.exports = RecruitmentForm = mongoose.model('RecruitmentForm',RecruitmentFormSchema)