import { gql } from '@apollo/client';
console.log(gql);

//LOGIN needs to have the same elements as the LoginForm, server/typeDefs, server/Resolvers
export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        }
    }
    }
    `;

//CREATE_USER needs to have the same elements as the SignupForm, server/typeDefs, server/Resolvers.
export const CREATE_USER = gql`
    mutation createUser(
        $fName: String!
        $lName: String!
        $email: String!
        $password: String!
    ) {
        createUser(
        fName: $firstName
        lName: $lastName
        email: $email
        password: $password
        ) {
        token
        user {
            _id
        }
    }
}
`;