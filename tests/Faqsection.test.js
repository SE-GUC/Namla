const faqsection = require("./Faq_fn");

test("Create Faqsection",async () => {
    
    const Faq={
        question:"how are you?",
        answer:"fine"
    } 
    const createdfaq =await faqsection.createFaqsection(Faq);
    const createdData=createdfaq.data.data
   
     expect.assertions(1);
     expect(createdData).toMatchObject(Faq);

  });          



 test("Get Faqsection",async () => {
   
     expect(typeof(faqsection.getFaqsection)).toEqual("function");
  });

  test("update Faqsection",async () => {
    const Faq={
        question:"How are you",
        answer:"22"
    } 
    const createdfaq =await faqsection.createFaqsection(Faq);
    const createdData=createdfaq.data.data
    const id=createdData["_id"]

    const update={
        question:"testUpdate",
        answer:"testupdate"
    }
    const updatedfaq =await faqsection.updateFaqsection(id,update);
    const updatedData=updatedfaq.data
   
     expect.assertions(1);
     expect(updatedData).toEqual({msg:'faq updated'})
  });          

 test("Delete Faqsection",async () => {
    const Faq={
        question:"how much?",
        answer:"2000"
    } 
    const createdfaq =await faqsection.createFaqsection(Faq);
    const createdData=createdfaq.data.data
    const id=createdData["_id"]
    const deletedfaq =await faqsection.deleteFaqsection(id);
    const deletedData=deletedfaq.data.data
   
     expect.assertions(1);
     expect(deletedData).toMatchObject(Faq);
  });          