const express = require('express')
const router = express.Router()
const Child = require('../../models/Child.js')
const Team = require('../../models/Team.js')

router.get('/getTeams', async (req, res) => {
    var teams = await Team.find()
    res.send(teams)
})

//As a "Portofolio"Admin I should be able to create children info
router.post('/', async (req, res) => {
    var child = new Child({
        team: req.body.team,
        name: req.body.name,
        age: req.body.age,
        familyStatus: req.body.familyStatus,
        educationalLevel: req.body.educationalLevel
    })
    await child.save()
    res.send(child)
})    

//As an Admin I should be able to read the children's info
router.get('/:id', async (req, res) => {
    var id = req.params.id
    var child = await Child.findById(id)
    res.send(child)
})

//As a "Portofolio"Admin I should be able to update children info
router.put('/:id', async (req, res) => {
    var id = req.params.id;
    var child = await Child.findById(id)
    if (req.body.team !== '') { child.team = req.body.team }
    if (req.body.name !== '') { child.name = req.body.name }
    if (req.body.age !== 0) { child.age = req.body.age }
    if (req.body.familyStatus !== '') { child.familyStatus = req.body.familyStatus }
    if (req.body.educationalLevel !== '') { child.educationalLevel = req.body.educationalLevel }
    await child.save()
    res.send(child)
})

router.put('/remove/:id', async (req, res) => {
    var id = req.params.id;
    var child = await Child.findById(id)
    child.team = ""
    await child.save()
    res.send(child)
})

//As a "Portofolio"Admin I should be able to delete children info
router.delete('/:id', async (req, res) => {
    var id = req.params.id
    var child = await Child.findByIdAndRemove(id)
    var team = await Team.findOne({'name':child.team})
    team.children.splice(team.children.indexOf(child._id),1)
    await team.save()
    res.send(child)
})

//As a "Portofolio"Admin I should be able to create 6 groups with children names
router.post('/createTeam', async (req, res) => {
    var team = new Team({
        name: req.body.name,
        children: req.body.children
    })
    team.save()
    res.send(team)
})

router.get('/', async (req, res) => {
    var children = await Child.find()
    res.send(children)
})

router.delete('/deleteTeam/:id', async (req, res) => {
    var id = req.params.id
    var team = await Team.findById(id)
    for (var i = 0; i < team.children.length; i++){
        var child = await Child.findById(team.children[i])
        child.team = ""
        await child.save()
    }
    team = await Team.findByIdAndRemove(id)
    res.send(team)
})

router.put('/updateTeam/:id', async (req, res) => {
    var id = req.params.id;
    var team = await Team.findById(id)
    if (req.body.name !== '') { team.name = req.body.name }
    if (req.body.children !== []) { team.children = req.body.children }
    await team.save()
    res.send(team)
})

module.exports = router