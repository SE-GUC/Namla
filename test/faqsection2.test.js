const FAQ = require("./faqsection2.fns");


test("Create FAQ",async () => {
    
   const data={
       answer:"testsss",
       question:"FAQ section?"
   } 
   const created =await FAQ.createFAQ(data);
   const createdData=created.data.data
  
    expect.assertions(1);
    expect(createdData).toMatchObject(data);
 });          



test("Getall FAQ",async () => {
  
    expect(typeof(FAQ.getFAQ)).toEqual("function");
 });
 test("Get FAQ",async () => {
    const data={
        
        question:"whaattt?"
    } 
    const created =await FAQ.createFAQ(data);
    const createdData=created.data.data
    const id=createdData["_id"]
   
   
    const get =await FAQ.getFAQ(id,createdData);
    const getData=get.data.data
   
     expect.assertions(1);
     expect(getData).toMatchObject(data);
  });          

  test("update FAQ",async () => {
    const d={
        answer:"No",
        question:"hi?"
    } 
    const created =await FAQ.createFAQ(d);
    const createdData=created.data.data
    const id=createdData["_id"]
    const update={
        answer:"bye",
        question:"Helloo?"       }
    const updated =await FAQ.updateFAQ(id,update);
    const updatedData=updated.data.data
   
     expect.assertions(1);
     expect(updatedData).toMatchObject(d);
  });                  


test("Delete FAQ",async () => {
   const data={
      
       question:"whaattt?"
   } 
   const created =await FAQ.createFAQ(data);
   const createdData=created.data.data
   const id=createdData["_id"]
   const deleted =await FAQ.deleteFAQ(id);
   const deletedData=deleted.data.data
  
    expect.assertions(1);
    expect(deletedData).toMatchObject(data);
 });
