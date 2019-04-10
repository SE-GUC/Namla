const axios = require('axios');
axios.defaults.adapter= require("axios/lib/adapters/http")
const announcement={
    createAnnouncement:async(data) => {
   
        const response =await axios.post('http://localhost:5000/api/Announcement/',data);
        return response;
    },

    getAnnouncement:async() => {
        const response =await axios.get('http://localhost:5000/api/Announcement/');
         return response;
    },

    updateAnnouncement:async(id,data) => {
         const response =await axios.put(`http://localhost:5000/api/Announcement/${id}`,data);
         return response;
     },
   

    deleteAnnouncement:async(id) => {
       
         const response =await axios.delete(`http://localhost:5000/api/Announcement/${id}`);
         return response;
     },
}
module.exports = announcement;