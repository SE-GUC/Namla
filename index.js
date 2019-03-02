const express = require('express')


const Carts = require('./routes/api/Carts')

const app = express()
app.use(express.json())



// Direct routes to appropriate files 

app.use('/api/Carts', Carts)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
