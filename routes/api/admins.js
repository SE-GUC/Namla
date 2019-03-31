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
const NebnyAdmin = require('../../models/NebnyAdmin');
const user = require('../../models/user');



// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

router.get('/', (req, res) => res.render('index'));

router.post('/upload', (req, res) => {
  
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});



router.get('/pics',(req,res)=>{
    console.log('before')

    res.render('index',{msg:'watch',file:`uploads/${images}`});
    res.send(images)
    console.log(images)
    console.log('after');
});

//app.get("/pics", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/"));
//});


router.delete('/api/delete/:id:id1',async(req,res)=>{
  const Nebnyadmin = await NebnyAdmin.findById(req.params.id)
  if(!Nebnyadmin) return res.status(404).send({error: 'Nebnyadmin not found'})
    const imagename=req.params.id


fs.unlink("./public/uploads/"+imagename,function(err){
    if(err){
        console.log(err);
        res.send("CAN'T FIND THIS FILE");
    }else{console.log("file removed")
    res.send('done')
  
  }
})

})


module.exports = router;
