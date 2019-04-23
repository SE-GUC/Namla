const mongoose = require('mongoose')
const cors = require('cors')
// Require Router Handlers
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');





const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";
const app = express();
app.use(cors())
app.use(passport.initialize())


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
const Cart= require('./routes/api/Cart')


const confirmationmessages = require('./routes/api/confirmationmessages')
const gallery = require('./routes/api/gallery')

const db = require('./config/keys').mongoURI

mongoose
    .connect('mongodb://localhost:27017/namla')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(busboyBodyParser({ limit: '50mb' }));  

app.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());

// Entry point
app.get('/', (req,res) => res.send(`<h1>WELCOME </h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.get('/gallery', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
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
app.use('/api/Cart', Cart)
app.use('/api/gallery', gallery)





app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))
