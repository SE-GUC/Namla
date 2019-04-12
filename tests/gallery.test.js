const functions = require('./gallery_fn');
var fs = require('fs');
// test('Recruitment form should be created', async()=>{

//     //const filePath = `./wallpapers/123.png`;  
//     const readStream = fs.createReadStream(`./wallpapers/123.png`);

//     expect.assertions(1); 

//     const response = await funcs.postimage(readStream);
//     expect(response).toEqual({message: "File was saved with success"})

// });
// test ('creating new image ', async()=>{
//      //const readStream = fs.createReadStream(`./wallpapers/123.png`);
//      let data = new FormData();
//      data.append('file', fs.createReadStream(`./wallpapers/123.png`));
//     const response= await functions.postimage(data)
    
//     //  const actual = image.data.data
//      expect.assertions(1)
//     expect(response).toEqual({message:'File was saved with success'})
     
//    })

test('Get All images data but not there base64 string', async()=>{

    expect.assertions(1);
    const response = await functions.getAllImages();
    expect(response).toBeDefined();

});
test('Delete an image ', async()=>{

    expect.assertions(1);
    const response = await functions.DeleteanImage();
    expect(response).toEqual({done:'done deletion this pic'});
    //here i should post a photo and then get it's imagename and send it
    //but since posting an image is not working at all so i put the it manually 
    //so to be sure we can post an image manually then get it's name an put it in the lonk untill i do the post test 
    //but since you told us only two is enough so i did two 
   
});
