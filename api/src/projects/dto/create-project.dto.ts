import { IsNotEmpty, IsString } from "class-validator"

export class CreateProjectDto {
    @IsString()
@IsNotEmpty()
title :string 
@IsString()
@IsNotEmpty()
description:string
@IsString()
@IsNotEmpty()
duration:string
@IsString()
@IsNotEmpty()
file:string
@IsString()
@IsNotEmpty()
status:string

@IsString()
@IsNotEmpty()
category:string
}
