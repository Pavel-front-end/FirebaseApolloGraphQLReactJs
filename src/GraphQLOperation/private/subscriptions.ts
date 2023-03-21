import { gql } from '@apollo/client'

export const USER_CREATED_SUBSCRIPTION = gql`
  subscription OnUserCreated($correlationId: String!){
    userCreated(correlationId: $correlationId){
        firstName,
        email
    }
  }
`