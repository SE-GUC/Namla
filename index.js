const express = require('express');
const bodyParser = require('body-parser');
const TeamsController = require('./routes/api/TeamsController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/teams', TeamsController);
app.listen(3000, () => console.log('SEVER RUNNING'));
