const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

const Admins = require('./routes/api/Admins')
const RecruitmentForms = require('./routes/api/RecruitmentForms')
const Carts = require('./routes/api/Carts')

const app = express()
app.use(express.json())



// Direct routes to appropriate files 

app.use('/api/Carts', Carts)
app.use('/api/RecruitmentForms', RecruitmentForms)
app.use('/api/Admins', Admins)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
