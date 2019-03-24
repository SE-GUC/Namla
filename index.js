const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";
var dirbuff=Buffer.from(directory);
var images=fs.readdirSync(directory);
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const admins = require('./routes/api/admins')

const products = require('./routes/api/products')


const db = require('./config/keys').mongoURI

 // Connect to mongo
 mongoose
     .connect(db)
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log(err))

const RecruitmentForms = require('./routes/api/RecruitmentForms')

const Faqsection = require('./routes/api/Faqsection')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/gallery', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
  <a href="/api/users">Users</a>
  <a href="/api/admins">admins</a>
  `);
  app.get('/RecForm', (req, res) => {
    res.send(`<h1>Welcome to Recruitment Page</h1>
    `);
})

 })
app.use('/api/users', users)
app.use('/api/admins', admins)

app.use('/api/products', products)

app.use('/api/Faqsection',Faqsection)

app.use('/api/RecruitmentForms', RecruitmentForms)



app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})


const port = 3000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))
