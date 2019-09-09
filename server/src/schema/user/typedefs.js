
const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  # ---
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    city: String!
    address: String!
    state: String!
  }
`

export default typeDefs
