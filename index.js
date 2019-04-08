const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const TeamsController = require('./routes/api/TeamsController')
mongoose
    .connect('mongodb://localhost:27017/namla')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/api/teams', TeamsController);
app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))