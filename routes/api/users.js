const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";
var dirbuff=Buffer.from(directory);
var images=fs.readdirSync(directory);
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const admin = require('../../models/admin');

const user = require('../../models/user');

// Init app
const app = express();
// Public Folder
app.use(express.static('./public'));





/*it work to get an array of images but they are not viewabl the array is shown in the console only it
 gives all details of images but i will handle later 
to view them on the websit since it is in the html part and so on */

router.get('/',(req,res)=>{
    console.log('before')

    res.render('index',{msg:'watch',file:`uploads/${images}`});
    //res.send(images)
    console.log(images)
    console.log('after');
});

//app.get("/pics", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/"));
//});



module.exports = router;
