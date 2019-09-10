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

export const CREATE_CARD = gql`
    mutation addCard($id: ID!, $data: addCard!, $idUser: ID!) {
        addCard(id: $id, data: $data, idUser: $idUser) {
            id
            idUser
			name
            price
            description
            category
        }
    }
`;
