const { Schema, model } = require('mongoose');

// subdocument schema - used as the schema for the `groups` array in the User Schema
const groupSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
    }
});

const Group = model('Group', groupSchema);

module.exports = Group;