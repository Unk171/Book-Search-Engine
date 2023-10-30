const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    savedBooks: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    savedBooks: []!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(userId: ID!, savedBook: String!): User
    removeBook(userId: ID!, savedBook: String!): User
  }
`;

module.exports = typeDefs;
