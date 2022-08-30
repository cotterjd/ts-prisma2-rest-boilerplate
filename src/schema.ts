import { gql } from 'apollo-server-express'

export default gql`

  scalar DateTime

  type Query {
    id: String
  }
  type Mutation {
    createId: String 
  }
`
