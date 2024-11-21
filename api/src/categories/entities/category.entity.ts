import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"

@Schema({timestamps:true})
export class category {
    @Prop({required:true,unique:true})

    name:string
    @Prop([{type:SchemaTypes.ObjectId , ref:"projects"}])
    projects:Types.ObjectId[]
    
}
export const CategorySchema=SchemaFactory.createForClass(category)