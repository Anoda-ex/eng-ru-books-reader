export interface IUser{
    id: string
}

export interface AuthSchema {
    user: null| IUser,
    error?: string
}