const { Schema } = require('mongoose');

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

module.exports = groupSchema;