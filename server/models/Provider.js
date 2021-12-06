const mongoose = require('mongoose');
const { Schema } = mongoose;

const providerSchema = new Schema(
    {
        place_id: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
        },
        location: {
            type: String,
        }
    }
);

module.exports = providerSchema;