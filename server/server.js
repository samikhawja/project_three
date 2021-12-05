const express = require('express');
//import Apolloserver class
const { ApolloServer } = require('apollo-server-express');
const path = require('path')

// Graphql schema bundle with definition and functions responsible for populating data in the schema
const { typeDefs, resolvers } = require('./schemas');
// Import authentication middle 
const { authMiddleware } = require('./utils/auth');
// Mongoose connection to MongoDB database instance
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();
// Initializing server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // So data from the `authMiddleware()` function can pass data to resolver functions
    context: authMiddleware,
});

server.applyMiddleware({ app });

// Parse incoming requests with urlencoded payloads and return as objects
app.use(express.urlencoded({ extended: false }))
// Return the incoming request objects as JSON objects
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});

// async function startApolloServer(typeDefs, resolvers) {

//     // Ensures that Apollo Server has successfully loaded its configuration before you start listening for HTTP requests. Req for apollo-server-express v3+
//     await server.start();

//     // integrate Express.js with the Apollo Server and connect the schema. Enables app to use GraphQL

//     await new Promise(resolve =>
//         db.once('open', () => {
//             app.listen(PORT, () => {
//             console.log(`🌍 Now listening on localhost:${PORT}`);
//             console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
//             });
//         })
//     );
// }

// startApolloServer(typeDefs, resolvers);