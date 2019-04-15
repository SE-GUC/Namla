const axios = require('axios')
const suggestionBox={
    
    default: async() =>{
        return axios.get(`http://localhost:5000/api/suggestionbox/`)
    },
    createSuggestionBox: async(data)  =>{
        return axios.post(`http://localhost:5000/api/suggestionbox/`,data)
    },
    UpdatesuggestionBox: async(id,updatedSuggestionbox) =>{
        return axios.put(`http://localhost:5000/api/suggestionbox/${id}`,updatedSuggestionbox)

    },
    deletesuggestionBox: async(id) =>{
        return axios.delete(`http://localhost:5000/api/suggestionbox/${id}`)
    }

}
module.exports = suggestionBox