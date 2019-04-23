const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const fs = require('fs');
const Grid = require("gridfs-stream");
const fileType = require('file-type');
const assert=require('assert');
GridStore = require('mongodb').GridStore
const passport = require('passport')


 const validator = require('../../validations/imageValidations')

const Files = require('../../models/GALLERY');
const conn = mongoose.connection;
    Grid.mongo = mongoose.mongo;
    let gfs;

    conn.once("open", () => {
        gfs = Grid(conn.db);


const headers=passport.authenticate('jwt', {session: false})


    router.get('/home', (req, res) => {
            gfs.files.find().toArray(function(err,files){
                if(files.length === 0){
                    return res.status(400).send({message:'there is no images to show'});
        
                }
                console.log(files);
                let data=[];
                let readstream =gfs.createReadStream({
                    filename:files[0].filename
                })
                readstream.on('data',function(chunk){
                    data.push(chunk);
                });
                readstream.on('end',function(){
                    
                    res.json({
                        success: true,
                        files
                    })
                                });
                readstream.on('error',function(err)
                {
                    console.log('an error occured!',err);
                    throw err;
                })
            })
        
        })
        
        //  router.get('/home', (req, res) => {
        //     Files.find()
        //         .exec()
        //         .then(files => {
        //             let uploadedFiles = files.map(file => ({
        //                 file_name: file.name,
        //                 file_id:  file.doc_id,
        //                 file_type: file.type,
        //                 file_link: `http://${req.headers.host}/v1/bucket/download?document_id=${file.doc_id}`
        //             }));
        //             res.json({
        //                 success: true,
        //                 uploadedFiles
        //             })
        //         })
        //         .catch(err => {
        //             logger.error(`[*] Error, while getting all uploaded file, with error:  ${err}`);
        //             res.status(400).send({
        //                 message: `Error, while getting all uploaded file, with error: ${err}`
        //             });
        //         });
        // });

        

        
    router.get('/download/:imgname',(req,res)=>{
   
            gfs.files.find({filename:req.params.imgname}).toArray(function(err,files){
        if(files.length === 0){
            return res.status(400).send({message:'file not found'});

        }
        console.log(files);
        let data=[];
        let readstream =gfs.createReadStream({
            filename:files[0].filename
        })
        readstream.on('data',function(chunk){
            data.push(chunk);
        });
        readstream.on('end',function(){
            data=Buffer.concat(data);
            let img ='data:image/png;base64,'+Buffer(data).toString('base64');

            res.json(img);
        });
        readstream.on('error',function(err)
        {
            console.log('an error occured!',err);
            throw err;
        })
    })

        })


 
 
    router.delete('/delete/:id',async (req,res)=>{
        Headers:headers
    const imagename=req.params.id
    await gfs.files.find({filename:imagename}).toArray(function(err,files){
        if(err){
                    return res.status(400).send({message:'file not found'});
                }
                else if(files.length===0){return res.json({error:'cannot find this pic'})}
                else{
                console.log(files)
                gfs.remove({filename:imagename},function(err){
                res.json({done:'done deletion this pic'})
})
                }
})
        })




    router.post('/upload',(req, res) => {
        Headers:headers
            let {
                file
            } = req.files;

            let writeStream = gfs.createWriteStream({
                filename: `${file.name}`,
                mode: 'w',
                content_type: file.mimetype
            });
            writeStream.on('close', function (uploadedFile) {
                const isValidated = validator.createValidation(uploadedFile.body)
                if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
               
                Files.insertMany({
                        length: uploadedFile.length,
                        name: uploadedFile.filename,
                        type: uploadedFile.contentType,
                       

                    })
                    .then(file => res.json({
                        success: true,
                        message: "File was saved with success"
                    }))
                    .catch(err => {
                        res.status(500).json({
                            message: `[*] Error while uploading new files, with error: ${err}`
                        })
                    })
            });
            writeStream.write(file.data);
             writeStream.end();
        });

    


});
 module.exports = router;


    