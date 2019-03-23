const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CartSchema = new Schema({
    
    
    confirmed: {
        type: Boolean,
        required: true
    },
    totalPrice: {
        type: Number, 
        required: true
    },
    products: {
        type: [String]
    }
})

module.exports = Cart = mongoose.model('Cart', CartSchema)