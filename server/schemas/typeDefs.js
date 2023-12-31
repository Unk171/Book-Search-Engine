const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Book {
    bookId: String
    uthors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth

    saveBook({ authors: String, description: String, title: String, bookId: String, image: String, link: String }): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
