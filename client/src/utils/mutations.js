import { gql } from '@apollo/client';

// what does the client need to render correctly once the api request has successfully updated the db as needed

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

export const ADD_GROUP = gql`
mutation addGroup($groupData: GroupInput!) {
    addGroup(groupData: $groupData) {
        _id
        groups {
            place_id
            name
            location
        }
    }
}
`;

export const ADD_PROVIDER = gql`
mutation addProvider($providerData: ProviderInput!) {
    addProvider(providerData: $providerData) {
        _id
        providers {
            place_id
            name
            location
        }
    }
}
`;