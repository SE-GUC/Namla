const express = require('express')

const mongoose = require('mongoose')




const confirmationmessage = require('./routes/api/confirmationmessage')

app.use('/api/confirmationmessage', confirmationmessage)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server on ${port}`))