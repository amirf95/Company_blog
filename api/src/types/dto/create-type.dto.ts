import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeDto {
    @IsString()
@IsNotEmpty()
reason :string 
}
