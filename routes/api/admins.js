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

// router.get('/', (req, res) => res.render('index'));

// router.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if(err){
//       res.render('index', {
//         msg: err
//       });
//     } else {
//       if(req.file == undefined){
//         res.render('index', {
//           msg: 'Error: No File Selected!'
//         });
//       } else {
//         console.log(req.file)
//         res.render('index', {
//           msg: 'File Uploaded!',
//           file: `uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });


router.get('/', async (req, res) => {
  //const image= await gallery.find()
  res.render('index')
  //res.json({data:image})
});
  

router.post('/upload', async (req, res) => {
  try{ 
   await upload (req, res, (err) => {
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
        // const document = {name:req.file.fieldname, title:req.file.size};
        // gallery.insertMany(document, {w: 1}, function(err, records){
        // console.log("Record added as "+records[0]._id);
        // });
      //   const isValidated = validator.createValidation(req.body)
      //   if(isValidated.error) return res.status(400).send({error:isValidated.error.details[0].message})
        //const newimg =  gallery.create(req.body)
       // res.json({msg:'image uploaded successfuly',data:newimg.originalname})
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });}
  catch(error){
    console.log(error)
  }
 
});


router.get('/pics',(req,res)=>{
    console.log('before')

    res.render('index',{msg:'watch',file:`uploads/${images}`});
    //res.send(images)
    console.log(images)
    console.log(gallery)
    console.log('after');
});


//app.get("/pics", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/"));
//});


router.delete('/delete/:id',(req,res)=>{
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
