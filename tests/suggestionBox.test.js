 const suggestionBox = require('./suggestionBox')
 
 test ('creating new suggestion box', async()=>{
     const suggestionbox={
         comment: "ay haga "
     }
     const createdsuggestionBox= await suggestionBox.createSuggestionBox(suggestionbox)
      const actual = createdsuggestionBox.data.data
      expect.assertions(1)
      expect(actual).toMatchObject(suggestionbox)
      
    })
      
 test ('updating the suggestion box', async()=>{
     const testCreat={
         comment: "ana gamed"
     }
    const createdsuggestionBox= await suggestionBox.createSuggestionBox(testCreat)
    const actual = createdsuggestionBox.data.data
    const createdID=actual['_id']
    const updateData= {
         comment:"ana gamed fash5"
     }
     const updatedsuggestionBox= await suggestionBox.UpdatesuggestionBox(createdID,updateData)
      const updating= updatedsuggestionBox.data.updatedSuggestionbox
      expect.assertions(1)
      expect(updating).toMatchObject(updateData)
 })

 test ('deleting the suggestion box', async()=>{
    const testCreat={
        comment: "ana gamed"
    }
    const createdsuggestionBox= await suggestionBox.createSuggestionBox(testCreat)
    const actual = createdsuggestionBox.data.data
    const createdID=actual['_id']
    
    const deletedsuggestionBox= await suggestionBox.deletesuggestionBox(createdID)
     const deleting= deletedsuggestionBox.data.data
     expect.assertions(1)
     expect(deleting).toMatchObject(testCreat)
})
