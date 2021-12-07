const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        fname: String
        lname: String
        providers: [Provider]
        groups: [Group]
        journals: [Journal]
        createdAt: String
    }
    type Provider {
        place_id: String
        name: String
        location: String
    }
    input ProviderInput {
        place_id: String
        name: String
        location: String
    }
    type Group {
        place_id: String
        name: String
        location: String
    }
    input GroupInput {
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
    input JournalInput {
        title: String
        body: String
        sentiment: String
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        searchTherapy: Search
        user: User
        journal: Journal  
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        
        createUser(fname: String!, lname: String!, email: String!, password: String!): Auth

        updateUser(fname: String, lname: String, email: String, password: String): User

        createJournal(journalData: JournalInput!): Journal

        addProvider(providerData: ProviderInput!): User

        addGroup(groupData: GroupInput!): User
    }
    type Search {
        result: String
    }
`;

module.exports = typeDefs