import { gql } from '@apollo/client';

// export for use in component
export const GET_USER = gql`
    query user {
        me {
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
        }
    }
`;