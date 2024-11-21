import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema({timestamps:true})
export class Task {
    @Prop({required:true})

    name:string
    @Prop({required:true})

    duration:string
    @Prop({required:true})

    status:string
    @Prop({required:true})

    description:string
   
    @Prop({type:SchemaTypes.ObjectId,ref:"projects",required:true})
    project:Types.ObjectId
    @Prop({type:SchemaTypes.ObjectId,ref:"users",required:true})
    user:Types.ObjectId
    

}
export const tasksSchema=SchemaFactory.createForClass(Task)
