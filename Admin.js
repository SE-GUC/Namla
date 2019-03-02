const Joi=require('joi')
const express=require('express');
const app=express();

app.use(express.json())
const announcements=[{id:1,post:'welcome to nebny'},{id:2,post:'hai nebny'},
{id:3,post:' nebny'},{id:4,post:'hello nebny'}]

app.get('/',(req,res)=>{
    res.send('HOMEPAGE')
})

app.post('/api/announcements',(req,res)=>{
    const {error}=validateAnnouncement(req.body)
    if (error){
        res.status(400).send(error.details[0].message)
        return 
    }
  const announc={ id: announcements.length+1,
   post: req.body.post
}
announcements.push( announc)
res.send( announc)
})

app.put('/api/announcements/:id',(req,res)=>{
const announc=announcements.find(c=>c.id ===  parseInt(req.params.id) )
if(!announc){
    res.status(400).send('there is no such announcement')   
}
const {error}=validateAnnouncement(req.body)
if (error){
    res.status(400).send(error.details[0].message)
    return 
}
announc.post=req.body.post
res.send(announc)
})

app.delete('/api/announcements/:id',(req,res)=>{
    const announc=announcements.find(c=>c.id ===  parseInt(req.params.id))
    if(!announc){
        res.status(400).send('there is no such announcement')   
    }
    const index=announcements.indexOf(announc)
    announcements.splice(index,1)
    res.send(announc)
})




function validateAnnouncement(announc){
    const x={
        post: Joi.string().min(5).required()
    }
    return Joi.validate(announc,x)
}





const port =process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} `));