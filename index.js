const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const Announcements = require('./routes/api/Announcement')


const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))



const RecruitmentForms = require('./routes/api/RecruitmentForms')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>Book Store</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handlers
app.use('/api/Announcement', Announcements)



app.use('/api/RecruitmentForms', RecruitmentForms)

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))