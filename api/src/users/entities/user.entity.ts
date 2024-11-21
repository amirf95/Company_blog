import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { Admin } from "src/admins/entity/admin.entity";
import { Employee } from "src/employees/entity/employee.entity";
import * as argon2 from "argon2"


@Schema({timestamps:true,discriminatorKey:'role'})
export class User {
    @Prop({required:true,enum:[Admin.name,Employee.name]})
    role:string

    @Prop({required:true})

    firstName:string
    @Prop({required:true})

    lastName:string
    @Prop({required:true})

    phone:string
    
    @Prop({required:true,unique:true})
    email:string
    
    @Prop({required:true})
    password:string
    @Prop({required:true})

    address:string

 
    @Prop([{type:SchemaTypes.ObjectId , ref:"tasks"}])
    task:Types.ObjectId[]
    @Prop([{type:SchemaTypes.ObjectId , ref:"permissions"}])
    permission:Types.ObjectId[]
    @Prop()
    refreshToken:string
}
export const userSchema=SchemaFactory.createForClass(User).pre('save',
    async function()
    {
this.password=await argon2.hash(this.password)
    }
) 
    
