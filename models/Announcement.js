const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const AnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    NebnyAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'NebnyAdmin'
    }
})

module.exports = Announcement = mongoose.model('Announcements', AnnouncementSchema)