const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Child = new Schema({
    team: String,
    name: String,
    age: Number,
    familyStatus: String,
    educationalLevel: String
})

module.exports = mongoose.model('child', Child)

const uuid = require('uuid')

// The Child Model
class Child {
    constructor(teamId, name, age, familyStatus, educationalLevel) {
        this.id = uuid.v4();
        this.teamId = teamId;
        this.name = name;
        this.age = age;
        this.familyStatus = familyStatus
        this.educationalLevel = educationalLevel
    };
};

module.exports = Child
