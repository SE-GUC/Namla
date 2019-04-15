const announcement = require("./Anno.fns");

test("Create Announcement",async () => {
    
    const Ann={
        details:"asdduhdusad"
    } 
    const created =await announcement.createAnnouncement(Ann);
    const createdData=created.data.data
   
     expect.assertions(1);
     expect(createdData).toMatchObject(Ann);
  });          



 test("Get Announcement",async () => {
   
     expect(typeof(announcement.getAnnouncement)).toEqual("function");
  });

  test("update Announcement",async () => {
    const Ann={
        details:"asdsad"
    } 
    const created =await announcement.createAnnouncement(Ann);
    const createdData=created.data.data
    const id=createdData["_id"]
    const update={
        details:"sdasd"
    }
    const updated =await announcement.updateAnnouncement(id,update);
    const updatedData=updated.data.data
   
     expect.assertions(1);
     expect(updatedData).toMatchObject(update);
  });          


 test("Delete Announcement",async () => {
    const Ann={
        
        details:"asdsad"
    } 
    const created =await announcement.createAnnouncement(Ann);
    const createdData=created.data.data
    const id=createdData["_id"]
    const deleted =await announcement.deleteAnnouncement(id);
    const deletedData=deleted.data.data
   
     expect.assertions(1);
     expect(deletedData).toMatchObject(Ann);
  });          