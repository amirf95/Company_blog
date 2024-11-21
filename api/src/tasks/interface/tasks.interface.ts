import { Document } from "mongoose"

export interface ITasks extends Document
{
    readonly name:string
    readonly duration:string
    readonly status:string
    readonly description:string
    readonly project:string
    readonly user:string
}