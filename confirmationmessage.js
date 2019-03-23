const mongoose = require('mongoose')

const Schema = mongoose.Schema



// Create the schema

const confirmationmessageSchema = new Schema({

    content: {

        type: String,

        required: true

    },

    to: {

        type: String,

        required: true

    },

    

})
