const { AuthenticationError } = require('apollo-server-express');
const { User, Journal, Provider, Group } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('journals');
        },
        journal: async (parent, { journalId }) => {
            return Journal.findOne({ _id: journalId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('journals');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect username');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(user);
            return { token, user };
        },
        addJournal: async (parent, { title }, context) => {
            if (context.user) {
                const journal = await Journal.create({
                    title,
                    body: context.user.username,
                    sentiment
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { journals: journal._id } }
                );
              return journal;
            }
            throw new AuthenticationError('Please log in');
        },
    },
};

module.exports = resolvers;