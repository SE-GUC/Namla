const express = require('express')
const mongoose = require('mongoose')



const products = require('./routes/api/products')



const RecruitmentForms = require('./routes/api/RecruitmentForms')

const Carts = require('./routes/api/Carts')
const admins = require('./routes/api/admins')
const users = require('./routes/api/users')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const app = express()


app.get('/gallery', (req, res) => {
    res.send(`<h1>Welcome to the gallery</h1>
    <a href="/api/users">Users</a>
    <a href="/api/admins">admins</a>
    `);
  })

const db = require('./config/keys').mongoURI

 // Connect to mongo
 mongoose
     .connect(db)
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log(err))


 app.use(express.json())
 app.use(express.urlencoded({extended: false}))



app.get('/product', (req, res) => {
    res.send(`<h1>Welcome to our store</h1>
    `);
})
 app.use('/api/products', products)


app.use('/api/RecruitmentForms', RecruitmentForms)


app.use('/api/admins', admins)
app.use('/api/users', users)
app.use('/api/Admins', Admins)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })



// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
 