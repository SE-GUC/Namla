// Import express
const express = require('express')
// Create the app
const app = express()

//const Joi = require('joi');
const uuid = require('uuid');
//const router = express.Router();
// Use it with post
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>FAQsection</h1>`)
})

const Answers = [
    {
        question: 'aaaaaaaaa',
        answer:'thankyou',
        aid:1
    },

    {
        question:'aaaaaaa',
        answer:'soryy',
        aid:2
    }
]

app.get('/Answers', (req, res) => {
    res.send(Answers)
})

app.post('/Answers', (req, res) => {
    const answer = req.body.answer
    const aid = req.body.aid
    
    
    const Answer = {
        answer: answer,
        id: Answers.length + 1
    }
    Asnwers.push(Answer)
    res.send(Answers)
})  

app.put('/Answers/:id', (req, res) => {
    const aid = req.params.aid 
    const updatedAnswer = req.body.answer
    const answer = Answers.find(answer => answer.id === aid)
    answer.answer = updatedTitle
    res.send(Answers)
})

app.delete('/Answers/:id', (req, res) => {
    const aid = req.params.aid 
    const answer = Answers.find(answer => answer.id === aid)
    const index = Answers.indexOf(answer)
    Answers.splice(index,1)
    res.send(Answers)
})




const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
