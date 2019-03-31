const funcs = require('./RecruitmentForm_fn');

test('Recruitment form should be created', async()=>{

    const CN = 'testing';
    const add = 'nasr';
    const agee = 21;
    const date = '21/2/2018';
    const time = '2:00';

    expect.assertions(1);
    const response = await funcs.createRecForm(CN,add,agee,date,time);
    expect(response.data.ClientName).toBe(CN);

});


test('Recruitment form can not be created as NebnyUser is not found', async()=>{

    const CN = 'testing';
    const add = 'nasr';
    const agee = 21;
    const date = '21/2/2018';
    const time = '2:00';

    expect.assertions(1);
    const response = await funcs.createRecForm(CN,add,agee,date,time);
    expect(response).toEqual({error: 'NebnyUser not found'})

});


test('Get a Certain Recruitment Form', async()=>{

    expect.assertions(1);
    const response = await funcs.getCertainRecForm();
    expect(response).toBeDefined()

});
test('Get All Recruitment Forms', async()=>{

    expect.assertions(1);
    const response = await funcs.getAllRecForms();
    expect(response).toBeDefined()

});
//delete successfull
test('Delete a Certain Recruitment Form', async()=>{

    expect.assertions(1);
    const response = await funcs.DeleteCertainRecForm();
    expect(response).toEqual({msg:'Form was deleted successfully'})
   
});
//check if the form is not found
test('Delete a Certain Recruitment Form', async()=>{

    expect.assertions(2);
    const response = await funcs.getAllRecForms();
    expect(response).toBeDefined()

    const res = await funcs.DeleteCertainRecForm();
    expect(res).toEqual({error: 'Form not found'})
    

});

test('Recruitment form should be Updated', async()=>{

    const CN = 'testing';
    const add = 'nasr';
    const agee = 21;
    const date = '21/2/2018';
    const time = '12:00';

    expect.assertions(1);
    const response = await funcs.UpdateRecForm(CN,add,agee,date,time);
    expect(response).toEqual({msg: 'Form updated successfully'})

});

test('Recruitment form can not be Updated as NebnyUser not found ', async()=>{

// test('Recruitment form should be Updated', async()=>{

//     const CN = 'testing';
//     const add = 'nasr';
//     const agee = 21;
//     const date = '21/2/2018';
//     const time = '12:00';

//     expect.assertions(1);
//     const response = await funcs.UpdateRecForm(CN,add,agee,date,time);
//     expect(response).toEqual({msg: 'Form updated successfully'})

// });

test('Recruitment form can not be Updated as Nebnyadmin not found ', async()=>{


    const CN = 'testing';
    const add = 'nasr';
    const agee = 21;
    const date = '21/2/2018';
    const time = '12:00';

    expect.assertions(1);
    const response = await funcs.UpdateRecForm(CN,add,agee,date,time);
    expect(response).toEqual({error: 'NebnyUser not found'})

});