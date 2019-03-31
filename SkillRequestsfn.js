const axios = require('axios');
const functions = {
	getSkillRequests: async () => {
        const skillRequests = await axios.get('http://localhost:3000//SkillsInMansheya/skillRequests/')
        return skillRequests
        },
        
    postSkillRequest: async () => {
        const newSkillRequest={
            "Skill" : "Testing"
        }
        const SkillRequest = await axios.post('http://localhost:3000//SkillsInMansheya/skillRequests/', newSkillRequest)
        return SkillRequest
        },
    deleteSkillRequest: async (id) => {
        const SkillRequest = await axios.delete('http://localhost:3000//SkillsInMansheya/skillRequests/'+id.toString())
        return SkillRequest
        },    
        
};
module.exports = functions;