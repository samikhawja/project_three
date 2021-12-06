const jwt = require('jsonwebtoken');

// Token secret and expiration time value
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req }) {
        // Token can be sent via request body, query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        } 
        
        if (!token) {
            return req;
        } 
        
        try {
        // retrieve user information from token
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            
            req.user = data;
        } catch {
            console.log('Invalid token');
        } 
        return req;
    },
    signToken: function ({ _id }) {
        const payload = { _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};