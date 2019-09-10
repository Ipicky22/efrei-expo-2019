import gql from 'graphql-tag';

export const EDIT_USER = gql`
    mutation editUser($id: ID!, $data: EditUserInput!) {
        editUser(id: $id, data: $data) {
            id
			firstname
            lastname
            email
            address
            city
            state
        }
    }
`;