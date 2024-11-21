import { IsNotEmpty, IsString } from "class-validator"

export class CreatePermissionDto {
    @IsString()
@IsNotEmpty()
reason :string 
@IsString()
@IsNotEmpty()
datedeb:string
@IsString()
@IsNotEmpty()
datefin:string
@IsString()
@IsNotEmpty()
status:string
@IsString()
@IsNotEmpty()
type:string   
@IsString()
@IsNotEmpty()
user:string
}
