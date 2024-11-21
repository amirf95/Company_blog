import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"
@Schema({timestamps:true})
export class Type {
    @Prop({required:true})

    name:string
    

    @Prop([{type:SchemaTypes.ObjectId , ref:"permission"}])
    permission:Types.ObjectId[]

}
export const typeSchema=SchemaFactory.createForClass(Type)
