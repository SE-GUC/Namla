const uuid = require('uuid')

// The User Model
class admin {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = uuid.v4();
    };
};

module.exports = admin
