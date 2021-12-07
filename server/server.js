const express = require('express');
const path = require('path')
//import Apolloserver class
const { ApolloServer } = require('apollo-server-express');
const routes = require('./routes');

// Graphql schema bundle with definition and functions responsible for populating data in the schema
const { typeDefs, resolvers } = require('./schemas');
// Import authentication middle 
const { authMiddleware } = require('./utils/auth');
// Mongoose connection to MongoDB database instance
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse incoming requests with urlencoded payloads and return as objects
app.use(express.urlencoded({ extended: true }))
// Return the incoming request objects as JSON objects
app.use(express.json());
app.use(routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

async function startApolloServer(typeDefs, resolvers) {
    // Initializing server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // So data from the `authMiddleware()` function can pass data to resolver functions
        context: authMiddleware,
    });

    // Ensures that Apollo Server has successfully loaded its configuration before you start listening for HTTP requests. Req for apollo-server-express v3+
    await server.start();

    // integrate Express.js with the Apollo Server and connect the schema. Enables app to use GraphQL
    server.applyMiddleware({ app });

    await new Promise(resolve =>
        db.once('open', () => {
            app.listen(PORT, () => {
            console.log(`🌍 Now listening on localhost:${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
            });
        })
    );
}

startApolloServer(typeDefs, resolvers);