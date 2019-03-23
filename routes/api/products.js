// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

// We will treat this array of Products as our database for now
const Products = [
    {
        name:'Keychain',
        type: 'Jewelery',
        price: 50,
        id: 1
    },
    {
			name:'Bracelet',
			type: 'Jewelery',
			price: 20,
			id: 2
    },
    {
      name:'Tray',
        type: 'Kitchenware',
        price:75,
        id: 3
    },
    {
			name:'Jar',
			type: 'Antique',
			price: 100,
			id: 4
    },
    {
			name:'Pot',
			type: 'Antique',
			price: 90,
			id: 5
    },
    {
			name:'Lamp',
			type: 'Lighting',
			price: 150,
			id: 6
    },
   
]



// Get all books
app.get('/api/Products', (req, res) => {
	res.send(Products)
})



// Get a certain Product
app.get('/api/Products/:id', (req, res) => {
    const PID = req.params.id
    const Product = Products.find(Product => Product.id === PID)
    res.send(Product)
})

// Create a Product
app.post('/api/Products/', (req, res) => {
    const name = req.body.title
    const type = req.body.type
    const price = req.body.price
    
    const Product = {
        name: name,
        type: type,
        price: price,
        id: Products.length + 1
    }
    Products.push(Product)
    res.send(Products)
})


// Update a Product's title
app.put('/api/Products/:id', (req, res) => {
    const PID = req.params.id 
    const updatedPrice = req.body.price
    const Product = Products.find(Product => Product.id === PID)
    Product.price = updatedPrice
    res.send(Products)
})


// Delete a Product
app.delete('/api/Products/:id', (req, res) => {
    const PID = req.params.id 
    const Product = Products.find(Product => Product.id === PID)
    const index = Products.indexOf(Product)
    Products.splice(index,1)
    res.send(Products)
})

