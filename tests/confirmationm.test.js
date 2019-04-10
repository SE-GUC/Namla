const funcs = require('./confirmationm');

test(' confirmation message should be created', async()=>{

    const content= 'testing';
    const to = 'ahmed';
   

    expect.assertions(0);
    const response = await funcs.createconfirmationm(content,to);
    
});