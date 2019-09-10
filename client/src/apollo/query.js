import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
{
    products {
        id
        name
        description
        price
        idUser
        picture
        category
    },
}`

export const GET_USERS = gql`
{
    users {
        id
        firstname
        lastname
        email
        address
        city
        state
    }
}`

export const GET_USER = gql`
query user($id: ID!) {
    user(id: $id) {
        id
        firstname
        lastname
        email
        address
        city
        state
    }
}`

export const SEARCH_PRODUCT = gql`
query xxx($q: String!) {
    search(q: $q) {
        id
        name
        description
        price
        idUser
        picture
        category
    }
}
`

export const MINE_PRODUCT = gql`
query xxx($q: ID!) {
    mine(q: $q) {
        id
        name
        description
        price
        idUser
        picture
        category
    }
}
`