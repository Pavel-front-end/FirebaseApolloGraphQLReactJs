export interface IAddress {
  street: string;
  apartment: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

interface IGetAddress extends IAddress {
  id: number;
  userId: number;
}

export interface IUserById {
  userById: {
    id: string;
    role: string;
    email: string;
    username: string;
    walletAddress: string;
    emailVerified: boolean;
    signInProvider: string;
    isBlocked: boolean;
    lastAppLaunch: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
    wallpaper: string;
    description: string;
    followers: string;
    following: string;
    skills: string[];
    avatar: string;
    isSubscribed: boolean;
    address: IGetAddress;
  };
}

export interface IUser {
  id: string;
  role: string;
  email: string;
  username: string;
  walletAddress: string;
  emailVerified: boolean;
  signInProvider: string;
  isBlocked: boolean;
  lastAppLaunch: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  coverImage: string;
  biography: string;
  profession: string;
  gender: string;
  dateOfBirth: string;
  followers: string;
  following: string;
  tags: string[];
  avatar: string;
  isSubscribed: boolean;
  address: IGetAddress;
}

export interface IMyProfile {
  myProfile: IUser;
}

export interface IMyWalletAddress {
  myProfile: {
    walletAddress: string;
  };
}
