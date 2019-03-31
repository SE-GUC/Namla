const axios = require('axios');
const functions = {
	getworkshopOwners: async () => {
        const workshopOwners = await axios.get('http://localhost:3000//SkillsInMansheya/workshopOwners/')
        return workshopOwners
        },
        
    postWorkshopOwner: async () => {
        const newWorkshopOwner={
            "Name" : "Jackson",
            "Contact" : "01009735482"
        }
        const WorkshopOwner = await axios.post('http://localhost:3000//SkillsInMansheya/workshopOwners/', newWorkshopOwner)
        return WorkshopOwner
        },
        
};
module.exports = functions;