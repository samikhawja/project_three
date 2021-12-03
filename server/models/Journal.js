const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// import moment from 'moment';

const journalSchema = new Schema({
    author: {
        type: String,
        required: true,
        trim: true,
    },
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

const Journal = model('Journal', journalSchema);

module.exports = Journal;