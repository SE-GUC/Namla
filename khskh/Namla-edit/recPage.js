// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())
// We will treat this array of Recruitment Forms as our database for now
const Recruitments = [
    {
        ClientName: 'Tarek Mohamed',
        age: 21,
        address: 'Mohandesin-Cairo',
        InterviewDate: '14-7-2019',
        InterviewTime: '14:00',
        id: '1'
    },
    {
        ClientName: 'Ali Yehia',
        age: 20,
        address: 'NasrCity-Cairo',
        InterviewDate: '23-2-2019',
        InterviewTime: '15:30',
        id: '2'
    }
]

// Default route (entry point)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome To Recruitment Page</h1>`)
})

// Get all Recruitment Forms
app.get('/api/Recruitment', (req, res) => {
    res.send(Recruitments)
})

// Create a new Recruitment Form
app.post('/api/Recruitment/', (req, res) => {
    const ClientName = req.body.ClientName
    const age = req.body.age
    const address = req.body.address
    const InterviewDate = req.body.InterviewDate
    const InterviewTime = req.body.InterviewTime
    const id = req.body.id
    
    const Recruitment = {
        ClientName: ClientName,
        age: age,
        address: address,
        InterviewDate: InterviewDate,
        InterviewTime: InterviewTime,
        id: Recruitments.length + 1
    }

    // if (!ClientName) return res.status(400).send({ err: 'ClientName field is required' });
    // if (typeof ClientName !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
	// if (!age) return res.status(400).send({ err: 'Age field is required' });
    // if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });

    // if (!address) return res.status(400).send({ err: 'address field is required' });
	// if (typeof address !== 'string') return res.status(400).send({ err: 'Invalid value for address' });

    // if (!InterviewDate) return res.status(400).send({ err: 'InterviewDate field is required' });
    // if (typeof InterviewDate !== 'string') return res.status(400).send({ err: 'Invalid value for InterviewDate' });

    // if (!InterviewTime) return res.status(400).send({ err: 'InterviewTime field is required' });
    // if (typeof InterviewTime !== 'string') return res.status(400).send({ err: 'Invalid value for InterviewTime' });
    
    Recruitments.push(Recruitment)
    res.send(Recruitments)
})

// Delete a Recruitment Form
app.delete('/api/Recruitment/:id', (req, res) => {
    const Formid = req.params.id 
    const Recruitment = Recruitments.find(Recruitment => Recruitment.id === Formid)
    const index = Recruitments.indexOf(Recruitment)
    Recruitments.splice(index,1)
    res.send(Recruitments)
})

// Update an Existing Current Form
app.put('/api/Recruitment/:id', (req, res) => {
    const Formid = req.params.id 

    const updatedClientName = req.body.ClientName
    const updatedage = req.body.age
    const updatedaddress = req.body.address
    const updatedInterviewDate = req.body.InterviewDate
    const updatedInterviewTime = req.body.InterviewTime

    const Recruitment = Recruitments.find(Recruitment => Recruitment.id === Formid)

    Recruitment.ClientName = updatedClientName
    Recruitment.age = updatedage
    Recruitment.address = updatedaddress
    Recruitment.InterviewDate = updatedInterviewDate
    Recruitment.InterviewTime = updatedInterviewTime

    res.send(Recruitments)
})

// Get a certain Form
app.get('/api/Recruitment/:id', (req, res) => {
    const Formid = req.params.id
    const Recruitment = Recruitments.find(Recruitment => Recruitment.id === Formid)
    res.send(Recruitment)
})

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))