const axios = require('axios');
axios.defaults.adapter= require("axios/lib/adapters/http")
const FAQ={
    createFAQ:async(data) => {
   
        const response =await axios.post('http://localhost:3000/api/Faqsection2/',data);
        return response;
    },

    getAllFAQ:async() => {
        const response =await axios.get('http://localhost:3000/api/Faqsection2/');
         return response;
    },
    getFAQ:async(id) => {
        const response =await axios.get(`http://localhost:3000/api/Faqsection2/${id}`);
        return response;
    },

    updateFAQ:async(id,data) => {
         const response =await axios.put(`http://localhost:3000/api/Faqsection/${id}`,data);
         return response;
     },
   

    deleteFAQ:async(id) => {
       
         const response =await axios.delete(`http://localhost:3000/api/Faqsection/${id}`);
         return response;
     },
}
module.exports = FAQ;