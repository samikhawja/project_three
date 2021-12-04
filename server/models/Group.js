const { Schema } = require('mongoose');

// Mongoose automatically creates ids for subdocument arrays objects

// subdocument schema - used as the schema for the `groups` array in the User Schema
const groupSchema = new Schema({
    // place_id from GooglePlaces
    groupId: {
        type: String,
        unique: true,
    },
    // name from GooglePlaces
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