
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
    firstName: String!
    lastName: String!
    email: String!
    city: String!
    adress: String!
    state: String!
  }
`

export default typeDefs
