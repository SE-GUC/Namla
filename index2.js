const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var fs=require('fs')
var directory ="./public/uploads";
var dirbuff=Buffer.from(directory);
var images=fs.readdirSync(directory);

const users = require('./routes/api/users')
const admins = require('./routes/api/admins')



// // Set The Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Init Upload
// const upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
//   fileFilter: function(req, file, cb){
//     checkFileType(file, cb);
//   }
// }).single('myImage');

// // Check File Type
// function checkFileType(file, cb){
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if(mimetype && extname){
//     return cb(null,true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

// Init app
const app = express();
app.use(express.json())
// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the gallery</h1>
  <a href="/api/users">Users</a>
  <a href="/api/admins">admins</a>
  `);
})
// app.post('/upload', (req, res) => {
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
//         res.render('index', {
//           msg: 'File Uploaded!',
//           file: `uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });



// app.get('/pics',(req,res)=>{
//     console.log('before')

//     res.render('index',{msg:'watch',file:`uploads/${images}`});
//     res.send(images)
//     console.log(images)
//     console.log('after');
// });

//app.get("/pics", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/"));
//});


// app.delete('/api/delete/:id',(req,res)=>{
//     const imagename=req.params.id


// fs.unlink("./public/uploads/"+imagename,function(err){
//     if(err){
//         console.log(err);
//         res.send("CAN'T FIND THIS FILE");
//     }else{console.log("file removed")
//     res.send('done')
  
//   }
// })

// })
app.use('/api/users', users)
app.use('/api/admins', admins)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})


const port = 3000;

app.listen(port, () => console.log(`Server up and running on port ${port}`))
