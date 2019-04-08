const mongoose = require('mongoose');

const GALLERYSchema = new mongoose.Schema({
    length : {
        type: Number
    },
    name: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('File', GALLERYSchema);
