const { Schema } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// import moment from 'moment';

// subdocument schema - used as the schema for the `journals` array in the User Schema
const journalSchema = new Schema({
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
        // get: (timestamp) => dateFormat(timestamp),
        // get: moment().format();
    },
});

module.exports = journalSchema;