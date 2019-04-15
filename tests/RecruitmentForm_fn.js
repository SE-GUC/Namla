const fetch = require('node-fetch');

const functions = {
    createRecForm: async (ClientName,address,age,InterviewDate,InterviewTime) =>{
        try{
            const data = {
                ClientName: ClientName,
                address: address,
                age: age,
                InterviewDate: InterviewDate,
                InterviewTime: InterviewTime
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/RecruitmentForms/5c9e87773043fa0d28b6b5cb',{
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
        }
    },
    getCertainRecForm: async() => {
        try{
            const response = await fetch('http://localhost:5000/api/RecruitmentForms/5c9e8bb70ac2cd23b42086f5')
            const json = await response.json();
            return json;
        }
        catch (e){
            console.log(e)
        }
    },
    getAllRecForms: async() =>{
        try{
            const response = await fetch('http://localhost:5000/api/RecruitmentForms/')
            const json = await response.json();
            return json;
        }
        catch (e){
            console.log(e)
        }
    },
    DeleteCertainRecForm: async() => {
        try{
            const response = await fetch('http://localhost:5000/api/RecruitmentForms/5c9e5d5909f6dc1a649c87c1/5c9ff8145c743c1b687a6998',{
                method: 'DELETE'
            });
            const json = await response.json();
            return json;
        }
        catch (e){
            console.log(e)
        }
    },
    UpdateRecForm: async (ClientName,address,age,InterviewDate,InterviewTime) =>{
        try{
            const data = {
                ClientName: ClientName,
                address: address,
                age: age,
                InterviewDate: InterviewDate,
                InterviewTime: InterviewTime
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/RecruitmentForms/update/5c9e5a9c09f6dc1a649c87c0/5c9ffef4fb9a081afc203bf0',{
                method: 'PUT',
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
        }
    }

}
module.exports = functions;