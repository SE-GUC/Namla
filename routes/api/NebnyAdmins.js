const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey


const NebnyAdmin = require('../../models/NebnyAdmin')
const validator = require('../../validations/NebnyAdminValidations')

//router.get('/', (req,res) => res.json({data: 'NebnyAdmins working'}))

router.get('/', async (req,res) => {
    const NebAdm = await NebnyAdmin.find()
    res.json({data: NebAdm})
})

router.post('/register', async (req,res) => {
    const { email, age, name, password ,type}  = req.body
    const Nebnyadmin = await NebnyAdmin.findOne({email})
    if(Nebnyadmin) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newNebnyAdmin = new NebnyAdmin({
            name,
            password: hashedPassword ,
            email,
            age,
            type
        })
    newNebnyAdmin
    .save()
    .then(Nebnyadmin => res.json({data: Nebnyadmin}))
    .catch(err => res.json({error: 'Can not create Nebnyadmin'}))
})


router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const admin = await NebnyAdmin.findOne({ email });
		if (!admin) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, admin.password);
		if (match) {
            const payload = {
                id: admin.id,
                name: admin.name,
                email: admin.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});
router.put('/update/:id', async (req,res) => {
    try {
     const id = req.params.id
     const { name, password, email,age ,type }  = req.body
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const NebnyAdm = await NebnyAdmin.findByIdAndUpdate(id,{name, password, email,age ,type})
     if(!NebnyAdm) return res.status(404).send({error: 'Form does not exist'})
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
     const deletedNebnyAdmin = await NebnyAdmin.findByIdAndRemove(id)
     res.json({msg:'NebnyAdmin was deleted successfully', data: deletedNebnyAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.get("/:id",async (req, res) => {
    const NebnyAdminId = req.params.id;
    const neededNebnyAdmin = await NebnyAdmin.findById(NebnyAdminId)
    res.json({ data: neededNebnyAdmin})
  });


module.exports = router