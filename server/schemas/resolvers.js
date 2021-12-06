const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
//, Journal
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Load saved books for a given user by id
        user: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Please log in to see your Providers & Groups.');
        },
        // CURRENT IMPLEMENTATION COMMENTED OUT BECAUSE I'VE DEEPLY OFFENDED THE TERMINAL
        // // TODO:
        // user: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOne({ _id: context.user._id }).populate('journals');
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        // journals: async (parent, { email }) => {
        //     const params = email ? { email } : {};
        //     return Journal.find(params).sort({ createdAt: -1 });
        // },
        // journal: async (parent, { journalId }) => {
        //     return Journal.findOne({ _id: journalId });
        // },
        // // /TODO
    },
    Mutation: {
        // Login user using email and password values provided from client (LoginForm)
        login: async (parent, { email, password }) => {
            // Look for document with matching email in User collection
            const user = await User.findOne({ email });

            // Notify user if there isn't a document with provided email
            if (!user) {
                throw new AuthenticationError('Incorrect email');
            }

            // Compare password input to password in User document using custom method
            const correctPassword = await user.isCorrectPassword(password);

            // Notify user if password input doesn't match document
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // User session is authenticated, with expiration clock started
            const token = signToken(user);
            return { token, user };
        },
        // Create user using values provided from client (SignupForm)
        createUser: async (parent, { fname, lname, email, password  }) => {
            const user = await User.create({ fname, lname, email, password  });

            // User session for newly create User is created, with expiration clock started
            const token = signToken(user);
            return { token, user };
        },
        // Update existing user document corresponding to whatever field values provided by client
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        // INITIAL IMPLEMENTATION
        // createJournal: async (parent, { journalText }, context) => {
        //     if (context.user) {
        //         const journal = await Journal.create({
        //             journalText,
        //             journalAuthor: context.user.email,
        //         });
        //         await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $addToSet: { journals: journal._id } }
        //         );
        //         return journal;
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        // CURRENT IMPLEMENTATION COMMENTED OUT BECAUSE I'VE DEEPLY OFFENDED THE TERMINAL
        // // create a new Journal leveraging user context
        // createJournal: async (parent, { journalData }, context) => {
        //     if (context.user) {
        //         const journal = new Journal({ journalData });
        
        //         await User.findByIdAndUpdate(context.user._id, { $push: { journals: journal } });
        
        //         return journal;
        //     }
        
        //     throw new AuthenticationError('Not logged in');
        // },
        // Add a Provider to a user's providers
        addProvider: async (parent, { providerData }, context ) =>{
            if (context.user) {
                const updateProviders = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    // Add the provider to the end of the providers array using the push method
                    { $push: { providers: providerData} },
                    // return the modified User document that includes the new provider in the providers array
                    { new: true }
                );
                return updateProviders;
            }
            throw new AuthenticationError('Unable to locate user');
        },
        // Add a Group to a user's groups
        addGroup: async (parent, { groupData }, context ) =>{
            if (context.user) {
                const updateGroups = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    // Add the group to the end of the groups array using the push method
                    { $push: { groups: groupData} },
                    // return the modified Group document that includes the new group in the providers array
                    { new: true }
                );
                return updateGroups;
            }
            throw new AuthenticationError('Unable to locate user');
        },
    },
};

module.exports = resolvers;