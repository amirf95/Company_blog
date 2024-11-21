import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";



@Schema({timestamps:true})
export class Project {
    @Prop({required:true})

    title:string
    @Prop({required:true})

    description:string
    @Prop({required:true})

    duration:string
    @Prop({required:true})

    file:string
    @Prop({required:true})
    status:string

    @Prop({type:SchemaTypes.ObjectId,ref:"categories",required:true})
    category:Types.ObjectId
    
    @Prop([{type:SchemaTypes.ObjectId , ref:"tasks"}])
    tasks:Types.ObjectId[]
}
export const projectSchema=SchemaFactory.createForClass(Project)