import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Admin{
    role:string
}
export const adminSchema=SchemaFactory.createForClass(Admin)