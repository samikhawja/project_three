const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import relevant schemas
const journalSchema = require('./Journal');
const groupSchema = require('./Group');
const providerSchema = require('./Provider');

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
        //providers is an array of data that adheres to the providerSchema
        provider: [providerSchema],
        //groups is an array of data that adheres to the groupSchema
        groups: [groupSchema],
        //journals is an array of data that adheres to the journalSchema
        journals: [journalSchema]
    },
    // tells Mongoose to automatically manage createdAt and updatedAt properties
    { timestamps : true },
);

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