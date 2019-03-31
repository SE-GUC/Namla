const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CartSchema = new Schema({
    
    
    confirmed: {
        type: Boolean,
        default: false
    },
    totalPrice: {
        type: Number,
        default: 0
        
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product'
    }
})

module.exports = Cart = mongoose.model('Cart', CartSchema)