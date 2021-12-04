const { Schema, model } = require('mongoose');

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

const Provider = model('Provider', providerSchema);

module.exports = Provider;