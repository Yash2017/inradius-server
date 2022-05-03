const { gql } = require("apollo-server-express");
//Queries
const typeDefs = gql`
  type Account {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    companyName: String
    number: Int
    location: String
    leftLat: String
    rightLat: String
    topLong: String
    btmLong: String
    radius: Int
    qual: String
    industry: String
    domain: String
    skillset1: String
    skillset2: String
    skillset3: String
    skillset4: String
    exp: String
    totalExp: String
    relevantExp: String
    currentPay: String
    expectedPay: String
    linkedIn: String
    type: String
  }

  type Query {
    hello: String
    getAllAccount: [Account]
  }
  input AccountInput {
    firstName: String
    lastName: String
    email: String
    password: String
    companyName: String
    number: Int
    location: String
    leftLat: String
    rightLat: String
    topLong: String
    btmLong: String
    radius: Int
    qual: String
    industry: String
    domain: String
    skillset1: String
    skillset2: String
    skillset3: String
    skillset4: String
    exp: String
    totalExp: String
    relevantExp: String
    currentPay: String
    expectedPay: String
    linkedIn: String
    type: String
  }
  type Mutation {
    createAccount(account: AccountInput): Account
    updateAccount(id: String, account: AccountInput): Account
    deleteAccount(id: String): String
  }
`;

module.exports = typeDefs;
