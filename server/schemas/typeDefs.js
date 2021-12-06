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
        createdAt: String
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
        
        createUser(email: String!, password: String!, fname: String!, lname: String!): Auth

        addProvider(providerData: ProviderInput!): User

        addGroup(groupData: GroupInput!): User

        updateUser(email: String, password: String, fname: String, lname: String): Auth

        createJournal(journalData: JournalInput!): Journal
    }
`;
// queries
// journal(_id: ID!): Journal

// journals(context.user._id: ID!): [Journal]



// type Query {
//     categories: [Category]
    
//     products(category: ID, name: String): [Product]

//     product(_id: ID!): Product

//     user: User

//     order(_id: ID!): Order

//     checkout(products: [ID]!): Checkout
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
//     addOrder(products: [ID]!): Order
    
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
    
//     updateProduct(_id: ID!, quantity: Int!): Product
    
//     login(email: String!, password: String!): Auth
//   }

module.exports = typeDefs