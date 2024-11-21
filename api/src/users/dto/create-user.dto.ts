import { IsEmail, IsNotEmpty, IsString,   } from "class-validator"

export class CreateUserDto {
@IsString()
@IsNotEmpty()
firstName:string 
@IsString()
@IsNotEmpty()
lastName:string
@IsString()
@IsNotEmpty()
phone:string
@IsString()
@IsNotEmpty()
@IsEmail()
email:string
@IsString()
@IsNotEmpty()
adress:string
}