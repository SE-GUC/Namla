const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema({
    name: String,
    children: [String]
})

module.exports = mongoose.model('team', Team)
const uuid = require('uuid')

// The Teams model
class Team {
    constructor(name, children) {
        this.id = uuid.v4();
        this.name = name;
        this.children = children
    };
};

module.exports = Team
