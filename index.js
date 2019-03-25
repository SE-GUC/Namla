const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers

const Cart = require('./routes/api/Cart')


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

const TeamsController = require('./routes/api/TeamsController')

const products = require('./routes/api/products')
const Announcements = require('./routes/api/Announcement')


const workshopOwners = require('./routes/api/workshopOwners')
const skillRequests = require('./routes/api/skillRequests')

const RecruitmentForms = require('./routes/api/RecruitmentForms')

const Faqsection = require('./routes/api/Faqsection')


const confirmationmessage = require('./routes/api/confirmationmessage')

app.use('/api/confirmationmessage', confirmationmessage)

const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



const app = express();
app.use(express.json())

 


// DB Config
const db = require('./config/keys').mongoURI


// Init middleware
app.use(express.json())

app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>Book Store</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.get('/gallery', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
  <a href="/api/users">Users</a>
  <a href="/api/admins">admins</a>
  <a href="/api/workshopOwners">admins</a>
  <a href="/api/skillRequests">admins</a>
  `);
  app.get('/RecForm', (req, res) => {
    res.send(`<h1>Welcome to Recruitment Page</h1>
    `);
})

 })
app.use('/api/users', users)
app.use('/api/admins', admins)

app.use('/api/teams', TeamsController);

app.use('/api/products', products)

app.use('/SkillsInMansheya/workshopOwners',workshopOwners)
app.use('/SkillsInMansheya/skillRequests', skillRequests)


app.use('/api/Faqsection',Faqsection)

app.use('/api/RecruitmentForms', RecruitmentForms)
app.use('/api/Announcement', Announcements)


// Direct to Route Handlers
app.use('/api/Cart', Cart)


app.use('/api/confirmationmessage', confirmationmessage)


app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
