const Joi=require('joi')
const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send('Welcome To Nebny')
})

app.use(express.json())

const updates=[{id:1,post:'new event'},{id:2,post:'competition in the gaps'}]

app.get('/api/updates',(req,res)=>{
    res.send(updates)
})

const FAQ=[{id:1,quest:'what is the competition?'},{id:2,quest:'how can I join nebny?'}]


function validation(update){
    const scheme={
        quest: Joi.string().min(10).required()
    }
    return Joi.validate(update,scheme)
}

app.post('/api/FAQ',(req,res)=>{
    const {error}=validation(req.body)
    if (error){
        res.status(400).send(error.details[0].message)
        return 
    }
  const question={ id: FAQ.length+1,
   quest: req.body.quest
}
FAQ.push( question)
res.send( question)
})

app.delete('/api/FAQ/:id',(req,res)=>{
    const question=FAQ.find(x => x.id ===  parseInt(req.params.id))
    if(!question){
        res.status(400).send('the question does not exist')   
    }
    const y=FAQ.indexOf(question)
    FAQ.splice(y,1)
    res.send(question)
})


app.put('/api/FAQ/:id',(req,res)=>{
const question=FAQ.find(x => x.id ===  parseInt(req.params.id) )
if(!question){
    res.status(400).send('the question does not exist')   
}
const {error}=validation(req.body)
if (error){
    res.status(400).send(error.details[0].message)
    return 
}
question.quest=req.body.quest
res.send(question)
})





const port =process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} `));