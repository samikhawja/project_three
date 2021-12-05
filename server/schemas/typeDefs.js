const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        password: String
        fname: String
        lname: String
        journals: [Journal]!
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
        users: [User]
        user(email: String!): User
        journals(email: String): [Journal]
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