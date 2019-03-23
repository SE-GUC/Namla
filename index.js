const express = require('express')
const mongoose = require('mongoose')



const products = require('./routes/api/products')



const app = express()


const db = require('./config/keys').mongoURI

 // Connect to mongo
 mongoose
     .connect(db)
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log(err))


 app.use(express.json())
 app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.send(`<h1>Welcome to our store</h1>
    `);
})
 app.use('/api/products', products)


 


// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
 