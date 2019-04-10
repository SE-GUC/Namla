const axios = require('axios')
const url = 'http://localhost:5000/api/teams/'
const functions = {
    createChild: async (Child) => {
        const child = await axios({
            method: 'post',
            url: url,
            headers: {},
            data : Child
        })
        return child.data
    },
    getChild: async (Id) => {
        const child = await axios(url+Id)
        return child.data
    },
    updateChild: async (Child, Id) => {
        const child = await axios({
            method: 'put',
            url: url+Id,
            headers: {},
            data : Child
        })
        return child.data
    },
    deleteChildren: async (Id) => {
        const child = await axios(url+Id)
        return child.data
    },
    createTeam: async (Team) => {
        const team = await axios({
            method: 'post',
            url: url+'createTeam',
            headers: {},
            data : Team
        })
        return team.data
    }
}
module.exports = functions