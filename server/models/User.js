const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Invalid email address format'],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        fname: {
            type: String,
            required: true,
            trim: true,
        },
        lname: {
            type: String,
            required: true,
            trim: true,
        },
        provider: [
            {
                place_id: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                    trim: true
                },
                location: {
                    type: String,
                    required: true,
                    trim: true
                },
            }
        ],
        group: [
            {
                place_id: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                    trim: true
                },
                location: {
                    type: String,
                    required: true,
                    trim: true
                },
            }
        ],
        journal: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Journal'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;