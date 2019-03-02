const express=require('express');
const app=express();

const announcements=[{post:'welcome to nebny'}]

app.get('/api/announcements',(req,res)=>{
    res.send(announcements)
})


const port =process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port} `));