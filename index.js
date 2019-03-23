const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


const RecruitmentForms = require('./routes/api/RecruitmentForms')
const Carts = require('./routes/api/Carts')
const admins = require('./routes/api/admins')
const users = require('./routes/api/users')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the gallery</h1>
    <a href="/api/users">Users</a>
    <a href="/api/admins">admins</a>
    `);
  })
// Direct routes to appropriate files 

app.use('/api/Carts', Carts)
app.use('/api/RecruitmentForms', RecruitmentForms)
app.use('/api/admins', admins)

app.use('/api/users', users)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
