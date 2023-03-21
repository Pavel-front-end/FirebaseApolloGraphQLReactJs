export interface IGetUsers {
  users: User[]
}

export interface User {
  id: number
  avatar: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  lastAppLaunch: string | undefined
  walletAddress: string | undefined
  username: string | undefined
  rating: number | undefined
  lvl: number | undefined
  scores: number | undefined
}
