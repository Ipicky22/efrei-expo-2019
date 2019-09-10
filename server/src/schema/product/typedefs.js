const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    products:[Product!]!
    search(q: String!): [Product!]!
    mine(q: ID!): [Product!]!
  }

  type Mutation {
    addCard(data: addCard!, id: ID!, idUser: ID!): Product!
  }
  
  # ---
type Product {
  id: ID!
  name: String!
  description: String!,
  price: Int!,
  picture: String,
  category: String!,
  idUser: ID!
}

input addCard {
  name: String!,
  description: String!,
  price: Int!,
  category: String!
}
`

export default typeDefs