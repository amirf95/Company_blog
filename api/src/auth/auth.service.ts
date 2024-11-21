import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateLoginDto } from './dto/create-login.dto';
import *as argon2 from "argon2"
import { JwtService } from '@nestjs/jwt';
import { privateDecrypt } from 'crypto';
import { access } from 'fs';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
constructor(
    private usersService:UsersService,
    private jwtService:JwtService,
    private configService:ConfigService

){}

async signIn(createLoginDto:CreateLoginDto)
{
    //test user exist
    const user=await this.usersService.findUserByEmail(createLoginDto.email)
    if(!user) throw new BadRequestException("user does not exist with this email")
    const passwordmatches= await argon2.verify(user.password,createLoginDto.password)
if
(!passwordmatches){ throw new BadRequestException("password is incorect")
}
//si email et password valid generate token
const tokens=await this.generateToknns(user._id,user.email)
await this.updateRefreshToken(user._id,tokens.refreshToken)
return {user,tokens}



}

//generate Token 
async generateToknns(userId:string , email:string){
const [accessToken,refreshToken]=await Promise.all([
    this.jwtService.signAsync(
        {
            sub:userId,
            email
        },
        {
            secret:this.configService.get<string>('JWT_ACCESS_TOKEN'),
            expiresIn:"30d"
        }
    ),

    this.jwtService.signAsync(
        {
        sub:userId,
        email
        },
        {
            secret:this.configService.get<string>('JWT_REFRESH_TOKEN'),
            expiresIn:"30d"

        }
    )
])
return{accessToken,refreshToken}
}
async updateRefreshToken (userId:string , refreshToken:string)
{
    const hashedRefreshToken= await argon2.hash(refreshToken)
    await this.usersService.update(userId,{refreshToken: hashedRefreshToken})
}
async refreshTokens(userId:string,refreshToken:string)
{
    //fetch user with id
    const user=await  this.usersService.findOne(userId)
    if(!user || !user.refreshToken)
    {
        throw new ForbiddenException("access denied")
    }
    const refreshTokenMatches = await argon2.verify(user.refreshToken,refreshToken)
    if(!refreshTokenMatches)
    {
        throw new ForbiddenException("access denied")
    }
    const tokens=await this.generateToknns(user._id,user.email)
await this.updateRefreshToken(user._id,tokens.refreshToken)
return {user,tokens}

}
async logout (userId:string){
    await this.usersService.update(userId,{refreshToken:null})
}
}
