const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const journalSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        body: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        },
        sentiment: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
);

const Journal = model('Journal', journalSchema);

module.exports = Journal;