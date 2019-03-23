const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const uri = require('./config/keys_dev.js')
const TeamsController = require('./routes/api/TeamsController')
const app = express()

mongoose.connect(uri.mongoURI)
.then(() => console.log('Mongodb connected'))
.catch( err => console.log(err))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route to teamcontroller
app.use('/api/teams', TeamsController);

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))