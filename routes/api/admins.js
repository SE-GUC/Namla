const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

const Admin = require('../../models/Admin')

router.get('/', (req,res) => res.json({data: 'Admins working'}))

router.post('/register', async (req,res) => {
    const { email, age, name, password }  = req.body
    const admin = await Admin.findOne({email})
    if(admin) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newAdmin = new Admin({
            name,
            password: hashedPassword ,
            email,
            age
        })
    newAdmin
    .save()
    .then(admin => res.json({data: admin}))
    .catch(err => res.json({error: 'Can not create admin'}))
})

module.exports = router
