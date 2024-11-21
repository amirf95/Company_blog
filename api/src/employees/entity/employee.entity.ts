import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Employee{
    role:string
}
export const employeeSchema=SchemaFactory.createForClass(Employee)