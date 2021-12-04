const { Schema, model } = require('mongoose');

// Mongoose automatically creates ids for subdocument arrays objects

// subdocument schema - used as the schema for the `providers` array in the User Schema
const providerSchema = new Schema({
    // place_id from GooglePlaces
    providerId: {
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

const Provider = model('Provider', providerSchema);

module.exports = Provider;