import { gql } from '@apollo/client';
console.log(gql);

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

export const CREATE_USER = gql`
    mutation createUser($fName: String!, $lName: String!, $email: String!, $password: String!) {
    createUser(fName: $fName, lName: $lName, email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}
`;