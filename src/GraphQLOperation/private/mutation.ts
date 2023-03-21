import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($userData: userData!) {
    user: updateUser(userData: $userData) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const CREATE_USER_PROFILE = gql`
  mutation createUserProfile {
    createUserProfile {
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

export const GENERATE_USER_WALLET_ADDRESS = gql`
  mutation generateUserWalletAddressMessage($walletAddress: String!) {
    generateUserWalletAddressMessage(walletAddress: $walletAddress) {
      message
    }
  }
`;

export const UPDATE_USER_WALLET = gql`
  mutation updateUserWalletAddress($message: String!, $signature: String!) {
    updateUserWalletAddress(data: {message: $message, signature: $signature}) {
      id
      walletAddress
    }
  }
`;
export const UPDATE_USER_EMAIL = gql`
  mutation updateUserEmail($email: String) {
    updateUserEmail(data: { email: $email }) {
      id
    }
  }
`;
export const UPDATE_USERNAME = gql`
  mutation updateUserUsername($username: String) {
    updateUserUsername(data: { username: $username }) {
      id
      username
    }
  }
`;
export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile(
    $firstName: String
    $lastName: String
    $displayName: String
    $phoneNumber: String
    $avatar: String
    $street: String!
    $apartment: String
    $city: String!
    $zipCode: String!
    $state: String!
    $country: String!
  ) {
    updateUserProfile(
      data: {
        firstName: $firstName
        lastName: $lastName
        displayName: $displayName
        phoneNumber: $phoneNumber
        avatar: $avatar
        address: {
          street: $street
          apartment: $apartment
          city: $city
          zipCode: $zipCode
          state: $state
          country: $country
        }
      }
    ) {
      id
    }
  }
`;

export const UPDATE_USER_PROFILE_NO_ADDRESS = gql`
  mutation updateUserProfile(
    $firstName: String
    $lastName: String
    $displayName: String
    $profession: String
    $biography: String
    $phoneNumber: String
    $dateOfBirth: String
    $gender: String
    $tags: [String!]
    $isSubscribed: Boolean
  ) {
    updateUserProfile(
      data: {
        firstName: $firstName
        lastName: $lastName
        displayName: $displayName
        profession: $profession
        biography: $biography
        phoneNumber: $phoneNumber
        dateOfBirth: $dateOfBirth
        gender: $gender
        tags: $tags
        isSubscribed: $isSubscribed
      }
    ) {
      id
      firstName
      lastName
      displayName
      profession
      biography
      phoneNumber
      dateOfBirth
      gender
      tags
      isSubscribed
    }
  }
`;

export const UPDATE_USER_ADDRESS = gql`
  mutation updateUserProfile(
    $street: String!
    $apartment: String
    $city: String!
    $zipCode: String!
    $state: String!
    $country: String!
  ) {
    updateUserProfile(
      data: {
        address: {
          street: $street
          apartment: $apartment
          city: $city
          zipCode: $zipCode
          state: $state
          country: $country
        }
      }
    ) {
      id
      address {
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

export const UPDATE_USER_AVATAR = gql`
  mutation updateUserAvatar($fileExtension: ImagesFileExtensions) {
    updateUserAvatar(fileExtension: $fileExtension) {
      uploadUrl
    }
  }
`;

export const UPDATE_USER_COVER_IMAGE = gql`
  mutation updateUserCoverImage($fileExtension: ImagesFileExtensions) {
    updateUserCoverImage(fileExtension: $fileExtension) {
      uploadUrl
    }
  }
`;
