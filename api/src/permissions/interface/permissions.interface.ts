import { Document } from "mongoose"

export interface Ipermission extends Document{
    readonly reason:string 
    readonly datedeb:string
  readonly  datefin:string
  readonly  status:string
   readonly type:string
   readonly user:string
}