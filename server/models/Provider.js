const { Schema } = require('mongoose');

// subdocument schema - used as the schema for the `providers` array in the User Schema
const providerSchema = new Schema({
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

module.exports = providerSchema;