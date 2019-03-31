const express = require('express')
const router = express.Router()
const Child = require('../../models/Child.js')
const Team = require('../../models/Team.js')
const NebnyAdmin = require('../../models/NebnyAdmin')

//As a "Portofolio"Admin I should be able to create children info
router.post('/:id1', async (req, res) => {
    
    const Nebnyadmin = await NebnyAdmin.findById(req.params.id1)
    if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})
    if(!(NebnyAdmin.type==='Portofolio')) return res.status(404).send({error: 'portofolio admin not found'})
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
router.get('/:id/id1', async (req, res) => {

    const Nebnyadmin = await NebnyAdmin.findById(req.params.id1)
    if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})

    var id = req.params.id
    var child = await Child.findById(id)
    res.send(child)
})

//As a "Portofolio"Admin I should be able to update children info
router.put('/:id/:id1', async (req, res) => {

    
    const Nebnyadmin = await NebnyAdmin.findById(req.params.id1)
    if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})
    if(!(NebnyAdmin.type==='Portofolio')) return res.status(404).send({error: 'portofolio admin not found'})
    var id = req.params.id;
    var child = await Child.findById(id)
    if (req.body.team) { child.teamId = req.body.team }
    if (req.body.name) { child.name = req.body.name }
    if (req.body.age) { child.age = req.body.age }
    if (req.body.familyStatus) { child.familyStatus = req.body.familyStatus }
    if (req.body.educationalLevel) { child.educationalLevel = req.body.educationalLevel }
    await child.save()
    res.send(child)
})

//As a "Portofolio"Admin I should be able to delete children info
router.delete('/:id/:id1', async (req, res) => {
    
    const Nebnyadmin = await NebnyAdmin.findById(req.params.id1)
    if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})
    if(!(NebnyAdmin.type==='Portofolio')) return res.status(404).send({error: 'portofolio admin not found'})
    var id = req.params.id
    var child = await Child.findByIdAndRemove(id)
    res.send(child)
})

//As a "Portofolio"Admin I should be able to create 6 groups with children names
router.post('/createTeam/:id1', async (req, res) => {
    
    const Nebnyadmin = await NebnyAdmin.findById(req.params.id1)
    if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})
    if(!(NebnyAdmin.type==='Portofolio')) return res.status(404).send({error: 'portofolio admin not found'})
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

router.get('/get/:id', async (req, res) => {
    var id = req.params.id
    var team = await Team.findById(id)
    res.send(team)
})

module.exports = router