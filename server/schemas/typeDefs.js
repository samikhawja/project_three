const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        password: String
        fname: String
        lname: String
        provider: [Provider]
        group: [Group]
        journal: [Journal]
    }
    type Provider {
        place_id: String
        name: String
        location: String
    }
    type Group {
        place_id: String
        name: String
        location: String
    }
    type Journal {
        _id: ID
        title: String
        body: String
        sentiment: String
        createdAt: String
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        journals(context.user._id: ID!): [Journal]
        journal(journalId: ID!): Journal
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        
        createUser(email: String!, password: String!, fname: String!, lname: String!): Auth
        
        updateUser(email: String, password: String, fname: String, lname: String): Auth

        createJournal(title: String!, body: String!, sentiment: String!): Journal
    }
`;

module.exports = typeDefs