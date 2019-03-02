const uuid = require('uuid')



// The confirmationmessage Model

class confirmationmessage {

    constructor(content, to ) {

        this.content = content;

        this.to = to;

        this.id = uuid.v4();

    };

};



module.exports = confirmationmessage

