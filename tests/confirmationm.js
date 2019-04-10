const fetch = require('node-fetch');

const functions = {
    createconfirmationm: async (content,to) =>{
        try{
            const data = {
                content: content,
                to: to,
               
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/confirmationmessages/5c9e87773043fa0d28b6b5cb',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch(e){
            console.log(e)
        }}}
        module.exports = functions;