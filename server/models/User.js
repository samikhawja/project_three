const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
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
        unique: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    provider: [
        {
            // make an id for provider?
            fname: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            lname: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            phone: {
                type: Number,
                required: true,
                unique: true,
            }
        }
    ],
    group: [
        {
            // make an id for group?
            groupName: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            // group location depending on api
        }
    ],
    journals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Journal',
        },
    ],
});

userSchema.pre('save', async function (done) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    done()
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;