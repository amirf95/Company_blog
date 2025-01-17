import { IsNotEmpty, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    name :string 
    @IsString()
    @IsNotEmpty()
    duration:string
    @IsString()
    @IsNotEmpty()
    status:string
    @IsString()
    @IsNotEmpty()
    description:string
    
    @IsString()
    @IsNotEmpty()
    project:string
    @IsString()
    @IsNotEmpty()
    user:string
   
}
