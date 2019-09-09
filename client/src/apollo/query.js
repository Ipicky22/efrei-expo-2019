import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
{
    products {
        id,
        name,
        description,
        price,
        idUser,
        picture,
        category
    }
}
`