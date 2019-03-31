const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

module.exports = Product = mongoose.model('Product', ProductSchema)