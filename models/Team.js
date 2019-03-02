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
