const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        fname: String
        lname: String
        createdAt: Date
        group: [Group]
        provider: [Provider]
        journals: [Journal]
    }
    type Journal {
        _id: ID
        title: String
        body: String
        sentiment: String
        createdAt: Date
    }
    type Group {
        id: String
        name: String
        location: String
    }
    type Provider {
        id: String
        name: String
        location: String
    }
    type Auth {
        token: _id!
        user: User
    }
    type Query {
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        
        createUser(username: String!, email: String!, password: String!, fname: String!, lname: String!): Auth
        
        updateUser(email: String, password: String, fname: String, lname: String): Auth

        createJournal(title: String!, body: String!, sentiment: String!): User

        addProvider(id: String!, name: String, location: String): User

        addGroup(id: String!, name: String, location: String): User
    }
`;

module.exports = typeDefs