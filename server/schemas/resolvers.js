const { AuthenticationError } = require('apollo-server-express');
const { User, Journal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('journals');
        },
        user: async (parent, { email }) => {
            return User.findOne({ email }).populate('journals');
        },
        journals: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Journal.find(params).sort({ createdAt: -1 });
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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect email');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(user);
            return { token, user };
        },
        createUser: async (parent, { email, password, fname, lname }) => {
            const user = await User.create({ email, password, fname, lname });
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        createJournal: async (parent, { journalText }, context) => {
            if (context.user) {
                const journal = await Journal.create({
                    journalText,
                    journalAuthor: context.user.email,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { journals: journal._id } }
                );
                return journal;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // addProvider: async (parent, { providerData }, context) => {
        //     console.log(context);
        //     if (context.user) {
        //         const provider = new Provider({ providerData });
        //         await User.findByIdAndUpdate(context.user._id, { $push: { providers: provider } });
        //         return provider;
        //     }
        //     throw new AuthenticationError('Not logged in');
        // },
        // addProvider: async (parent, { providerData }, context ) =>{
        //     if (context.user) {
        //         const updateUserProviders = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             // Add the provider to the end of the providers array using the push method
        //             { $push: { providers: providerData } },
        //             // return the modified User document that includes the new provider in the providers array
        //             { new: true }
        //         );
        //         return updateUserProviders;
        //     }
        //     throw new AuthenticationError('Cannot find a user matching this id.');
        // },
        // addGroup: async (parent, { groupData }, context) => {
        //     console.log(context);
        //     if (context.user) {
        //         const group = new Group({ groupData });
        //         await User.findByIdAndUpdate(context.user._id, { $push: { groups: group } });
        //         return group;
        //     }
        //     throw new AuthenticationError('Not logged in');
        // },
        // addGroup: async (parent, { groupData }, context ) =>{
        //     if (context.user) {
        //         const updateUserGroups = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             // Add the group to the end of the groups array using the push method
        //             { $push: { groups: groupData } },
        //             // return the modified User document that includes the new group in the groups array
        //             { new: true }
        //         );
        //         return updateUserGroups;
        //     }
        //     throw new AuthenticationError('Cannot find a user matching this id.');
        // },
    },
};

module.exports = resolvers;