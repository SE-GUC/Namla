const fetch = require('node-fetch');
const fs = require('fs');
const axios= require('axios');
const FormData = require('form-data');



const functions = {
    // postimage: async(file)  =>{
        
    //      axios.post(`http://localhost:5000/api/gallery/upload`,file,{
    //         headers: {
    //             'accept': 'application/json',
    //             'Accept-Language': 'en-US,en;q=0.8',
    //             'Content-Type': `multipart/form-data;` 
    //         },
    //         body: FormData
    //     })
    //     .then((response) => {
    //         //handle success
    //       }).catch((error) => {
    //         //handle error
    //       });
    
    //     }
    
    
    // postimage: async (file) =>{
    //     try{
    //         const formData = new FormData();
    //         formData.append('file',file); 
          
    //         const response = await fetch('http://localhost:5000/api/gallery/upload',{
    //             method: 'POST',
    //             body: FormData
    //                     });
    //         const json = await response.json();
    //         return json;
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }
    
    getAllImages: async() =>{
        try{
            const response = await fetch('http://localhost:5000/api/gallery/home')
            const json = await response.json();
            return json;
        }
        catch (e){
            console.log(e)
        }
    },
    DeleteanImage: async() => {
        try{
            const response = await fetch('http://localhost:5000/api/gallery/delete/Windows_10_LogoBlue.svg-copy_WINDOWS-720x340.jpg',{
                method: 'DELETE'
    //here i should post a photo and then get it's imagename and send it
    //but since posting an image is not working at all so i put the it manually 
    //so to be sure we can post an image manually then get it's name an put it in the lonk untill i do the post test 
    //but since you told us only two is enough so i did two 
            });
            const json = await response.json();
            return json;
        }
        catch (e){
            console.log(e)
        }
    }
}

module.exports = functions;