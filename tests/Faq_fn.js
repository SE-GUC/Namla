const axios = require('axios');
axios.defaults.adapter= require("axios/lib/adapters/http")
const faqsection={
    createFaqsection:async(data) => {
   
        const response =await axios.post('http://localhost:5000/api/Faqsection2/',data);
        return response;
    },

    getFaqsection:async() => {
        const response =await axios.get('http://localhost:5000/api/Faqsection2/');
         return response;
    },

    updateFaqsection:async(id,data) => {
         const response =await axios.put(`http://localhost:5000/api/Faqsection/${id}`,data);
         return response;
     },
   

    deleteFaqsection:async(id) => {
       
         const response =await axios.delete(`http://localhost:5000/api/Faqsection/${id}`);
         return response;
     },
}
module.exports = faqsection;