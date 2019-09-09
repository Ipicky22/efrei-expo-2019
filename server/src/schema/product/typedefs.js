const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }
  type Query {
    products:[Product!]!
  }
  # ---
type Product {
  id: ID!
  name: String!
  description: String!,
  price: Int!,
  picture: String!,
  category: String!,
  idUser: ID!
}
`

export default typeDefs