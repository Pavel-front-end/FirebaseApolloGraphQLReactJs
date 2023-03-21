import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($page: Int, $pageSize: Int) {
    users(query: { page: $page, pageSize: $pageSize }) {
      firstName
      lastName
      lastAppLaunch
      walletAddress
    }
  }
`;

export const USER_BY_ID_BASIC = gql`
  query userById($id: String!) {
    userById(id: $id) {
      id
      username
      userOnboarded
      walletAddress
      firstName
      lastName
      displayName
      avatar
    }
  }
`;

export const USER_BY_ID_FULL = gql`
  query userById($id: String!) {
    userById(id: $id) {
      id
      username
      userOnboarded
      walletAddress
      firstName
      lastName
      displayName
      avatar
      email
      emailVerified
      signInProvider
      isBlocked
      lastAppLaunch
      createdAt
      updatedAt
      phoneNumber
      isSubscribed
      address {
        id
        userId
        street
        apartment
        city
        zipCode
        state
        country
      }
    }
  }
`;

export const MY_PROFILE_FULL = gql`
  query myProfile {
    myProfile {
      id
      role
      email
      username
      userOnboarded
      walletAddress
      emailVerified
      signInProvider
      isBlocked
      lastAppLaunch
      createdAt
      updatedAt
      firstName
      lastName
      displayName
      phoneNumber
      avatar
      profession
      isSubscribed
      biography
      coverImage
      dateOfBirth
      gender
      tags
      address {
        id
        userId
        street
        apartment
        city
        zipCode
        state
        country
      }
    }
  }
`;

export const MY_WALLET_ADDRESS = gql`
  query myProfile {
    myProfile {
      walletAddress
    }
  }
`;

export const USERNAME_AVAILABILITY = gql`
  query usernameAvailability($username: String!) {
    usernameAvailability(username: $username) {
      username
      available
    }
  }
`;
