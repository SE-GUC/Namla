const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkshopOwnerSchema = new Schema({
    Description : {
        type : String,
        required: true
    },
    Contact : {
        type : String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})


module.exports = WorkshopOwner = mongoose.model('WorkshopOwners', WorkshopOwnerSchema)