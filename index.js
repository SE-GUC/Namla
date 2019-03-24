const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";
var dirbuff=Buffer.from(directory);
var images=fs.readdirSync(directory);

const users = require('./routes/api/users')
const admins = require('./routes/api/admins')

const app = express();
app.use(express.json())

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/gallery', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
  <a href="/api/users">Users</a>
  <a href="/api/admins">admins</a>
  `);


 })
app.use('/api/users', users)
app.use('/api/admins', admins)

app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})


const port = 3000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))
