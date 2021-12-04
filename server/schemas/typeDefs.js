const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        fname: f
        lname: String
        group: [Group]
        provider: [Provider]
        journals: [Journal]
    }
    type Journal {
        title: String
        body: String
        sentiment: String
    }
    type Group {
        groupId: String
        name: String
        location: String
    }
    type Provider {
        providerId: String
        name: String
        location: String
    }
    type Auth {
        token: ID
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

        addProvider(providerId: String!, name: String, location: String): User

        addGroup(groupId: String!, name: String, location: String): User
    }
`;

module.exports = typeDefs