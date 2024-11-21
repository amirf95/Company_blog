import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaType, SchemaTypes, Types } from "mongoose";
import { permission } from "process";
import { typeSchema } from "src/types/entities/type.entity";

@Schema({timestamps:true})
export class Permission {
    @Prop({required:true})

    reason:string
    @Prop({required:true})

    datedeb:string
    @Prop({required:true})

    datefin:string
    @Prop({required:true})

    status:string

    @Prop({type:SchemaTypes.ObjectId,ref:"types",required:true})
    type:Types.ObjectId
    
    @Prop({type:SchemaTypes.ObjectId,ref:"users",required:true})
    user:Types.ObjectId



   
}
export const PermissionSchema=SchemaFactory.createForClass(Permission)