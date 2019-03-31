 const suggestionBox = require('./suggestionBox')
 
 test ('creating new suggestion box', async()=>{
     const suggestionBox={
         comment: "ay haga "
     }
     const createdsuggestionBox= await suggestionBox.createSuggestionBox(suggestionBox)
      const actual = createdsuggestionBox.data.data
      expect(actual).toMatchObject(suggestionBox)
      
    })
      
 test ('updating the suggestion box', async()=>{
     const suggestionBox={
         comment: "ay hagaa "
     }
     const updatedsuggestionBox= await suggestionBox.updatedsuggestionBox(suggestionBox)
      const updating= updatedsuggestionBox.data.data
      expect(updating).toMatchObject(suggestionBox)

 })
 test (' deleting the suggestion box', async()=>{
     const suggestionBox={
         comment: "ay haaga "
     }
     const deletedsuggestionBox = await suggestionBox.deletedsuggestionBox(suggestionBox)
     const deleting= deletedsuggestionBox.data.data
     expect(deleting).toMatchObject(suggestionBox)

 })