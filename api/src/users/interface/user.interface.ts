import { Document } from "mongoose"

export interface IUser extends Document{
    readonly _id:string

    readonly firstName:string 

    readonly lastName : string

    readonly phone : string 

    readonly email: string

    readonly address : string 
    
    readonly password : string
    readonly refreshToken:string
}