import { Document } from "mongoose"

export interface IProject extends Document{
    readonly title:string 

    readonly description : string

    readonly duration : string 

    readonly file: string

    readonly status : string 
     
    readonly category:string
    
}