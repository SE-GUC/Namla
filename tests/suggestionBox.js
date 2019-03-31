const axios = require('axios')
const suggestionBox={
    
    default: async() =>{
        return axios.get(`http://localhost:3000/api/suggestionbox/`)
    },
    createSuggestionBox: async(data)  =>{
        return axios.post(`http://localhost:3000/api/suggestionbox/`,data)
    },
    UpdatesuggestionBox: async(updatedSuggestionbox) =>{
        return axios.put(`http://localhost:3000/api/suggestionbox/`,updatedSuggestionbox)

    },
    deletesuggestionBox: async(deletedSuggestion) =>{
        return axios.delete(`http://localhost:3000/api/suggestionbox/`,deletedSuggestion)
    },

}
module.exports = suggestionBox