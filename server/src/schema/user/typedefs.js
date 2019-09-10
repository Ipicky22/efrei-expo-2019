
const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    editUser(id: ID!, data: EditUserInput!): User!
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

  input EditUserInput {
    firstname: String!
    lastname: String!
    email: String!
    city: String!
    address: String!
    state: String!
  }
`

export default typeDefs
