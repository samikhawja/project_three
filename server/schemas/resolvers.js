const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Get a user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Please log in to see your saved books.');
        }
    },
};

module.exports = resolvers;