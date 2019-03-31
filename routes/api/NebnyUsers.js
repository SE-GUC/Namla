const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

const NebnyUser = require('../../models/NebnyUser')
const validator = require('../../validations/NebnyUserValidations')

//router.get('/', (req,res) => res.json({data: 'NebnyAdmins working'}))

router.get('/', async (req,res) => {
    const NebUsr = await NebnyUser.find()
    res.json({data: NebUsr})
})

router.post('/register', async (req,res) => {
    const { email, age, name, password }  = req.body
    const Nebnyuser = await NebnyUser.findOne({email})
    if(Nebnyuser) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newNebnyUser = new NebnyUser({
            name,
            password: hashedPassword ,
            email,
            age
        })
    newNebnyUser
    .save()
    .then(Nebnyuser => res.json({data: Nebnyuser}))
    .catch(err => res.json({error: 'Can not create Nebnyuser'}))
})

router.put('/update/:id', async (req,res) => {
    try {
     const id = req.params.id
     const { name, password, email,age}  = req.body
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const NebnyUsr = await NebnyUser.findByIdAndUpdate(id,{name, password, email,age})
     if(!NebnyUsr) return res.status(404).send({error: 'Form does not exist'})
     res.json({msg: 'Form updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedNebnyUser = await NebnyUser.findByIdAndRemove(id)
     res.json({msg:'NebnyUser was deleted successfully', data: deletedNebnyUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.get("/:id",async (req, res) => {
    const NebnyUserId = req.params.id;
    const neededNebnyUser = await NebnyUser.findById(NebnyUserId)
    res.json({ data: neededNebnyUser})
  });


module.exports = router