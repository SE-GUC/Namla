const express = require('express');
const router = express.Router();

var children = [];
var teams = [];

router.get('/', (req, res) => {
res.send(children)
});

router.get('/:id', (req, res) => {
var id = req.params.id;
var child = children.find(child => child.id = id);
res.send(child)
});

router.post('/', (req, res) => {
var teamId = req.body.teamId;
var name = req.body.name;
var age = req.body.age;
var familyStatus = req.body.familyStatus;
var educationalLevel = req.body.educationalLevel;
var child = {
id : children.length + 1,
teamId,
name,
age,
familyStatus,
educationalLevel
}
children.push(child)
res.send(child)
});

router.put('/:id', (req, res) => {
 var id = req.params.id;
var teamId = req.body.teamId;
var name = req.body.name;
var age = req.body.age;
var familyStatus = req.body.familyStatus;
var educationalLevel = req.body.educationalLevel;
var child = children.find(child => child.id = id);
if (teamId) { child.teamId = teamId }
if (name) { child.name = name }
if (age) { child.age = age }
if (familyStatus) { child.familyStatus = familyStatus }
if (educationalLevel) { child.educationalLevel = educationalLevel }
res.send(child)
});

router.delete('/:id', (req, res) => {
var id = req.params.id;
var child = children.find(child => child.id = id);
var index = children.indexOf(child)
children.splice(index, 1)
res.send(children)
});

router.post('/createTeam', (req, res) => {
var name = req.body.name;
var children = req.body.children;
var team = {
id : teams.length + 1,
name,
children
}
teams.push(team)
res.send(teams)
});

router.get('/getTeams/', (req, res) => {
res.send(teams)
});

router.get('/getTeam/:id', (req, res) => {
var id = req.params.id;
var team = teams.find(team => team.id = id)
res.send(team)
});

module.exports = router
