const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')

// Require Router Handlers

const Cart = require('./routes/api/Cart')



//const multer = require('multer');
//const ejs = require('ejs');
//const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";

var dirbuff=Buffer.from(directory);
var images=fs.readdirSync(directory);
const app = express();
app.use(cors())

const users = require('./routes/api/users')
const admins = require('./routes/api/admins')

const TeamsController = require('./routes/api/TeamsController')

const products = require('./routes/api/products')
const Announcements = require('./routes/api/Announcement')


const workshopOwners = require('./routes/api/workshopOwners')
const skillRequests = require('./routes/api/skillRequests')

const RecruitmentForms = require('./routes/api/RecruitmentForms')

const Faqsection = require('./routes/api/Faqsection')
const Faqsection2 = require('./routes/api/Faqsection2')
const NebnyAdmins = require('./routes/api/NebnyAdmins')
const NebnyUsers = require('./routes/api/NebnyUsers')
const suggestionBox= require('./routes/api/suggestionbox')


const confirmationmessages = require('./routes/api/confirmationmessages')


const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.json())

 


// Init middleware

app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>WELCOME </h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.get('/gallery', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
  <a href="/api/users">Users to get the gallery</a>
  <a href="/api/admins">Admins gallery</a>
  `);

 })
 app.get('/RecForm', (req, res) => {
  res.send(`<h1>Welcome to Recruitment Page</h1>
  `);
})


app.get('/workshopOwners', (req, res) => {
  res.send(`<h1>Welcome to workshop Owners Page</h1>
  `);
})

app.get('/skill Requests', (req, res) => {
  res.send(`<h1>Welcome to skill Requests Page</h1>
  `);
})


app.use('/api/users', users)
app.use('/api/admins', admins)

app.use('/api/teams', TeamsController);

app.use('/api/products', products)

app.use('/SkillsInMansheya/workshopOwners',workshopOwners)
app.use('/SkillsInMansheya/skillRequests', skillRequests)


app.use('/api/Faqsection',Faqsection)
app.use('/api/Faqsection2',Faqsection2)

app.use('/api/RecruitmentForms', RecruitmentForms)
app.use('/api/Announcement', Announcements)
app.use('/api/confirmationmessages', confirmationmessages)
app.use('/api/NebnyAdmins', NebnyAdmins)
app.use('/api/NebnyUsers', NebnyUsers)
app.use('/api/suggestionbox', suggestionBox)



// Direct to Route Handlers
app.use('/api/Cart', Cart)




app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))
