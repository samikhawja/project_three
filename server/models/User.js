const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const providerSchema = require('./Provider');
const groupSchema = require('./Group');

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
        providers: [providerSchema],
        groups: [groupSchema],
        journals: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Journal'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
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

const User = model('User', userSchema);

module.exports = User;