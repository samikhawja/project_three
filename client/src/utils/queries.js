import { gql } from '@apollo/client';

// export for use in component
export const GET_USER = gql`
    query user {
        user {
            _id
            email
            fname
            lname
            providers {
                place_id
                name
                location
            }
            groups {
                place_id
                name
                location                
            }
            createdAt
        }
    }
`;
export const SEARCH = gql`
    query searchTherapy {
        searchTherapy {
            result
        }
    }
`;

// export for use in component
export const GET_JOURNALS = gql`
    query journal {
        journal {
            _id
            title
            body
            sentiment
            createdAt
        }
    }
`;

export const SEARCH = gql`
    query searchTherapy {
        searchTherapy {
            result
        }
    }
`;