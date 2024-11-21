import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { Request } from 'express';
import { RefreshTokenguard } from 'src/guards/refreshToken.guard';
import { AccessTokenGuard } from 'src/guards/accessToken.guard';
import { log } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() CreateLoginDto: CreateLoginDto)
  {
    return this.authService.signIn(CreateLoginDto)
  }
  @UseGuards(RefreshTokenguard)
  @Get('refresh')
  refreshTokens(@Req() req:Request)
  {
const userId=req.user['sub']
const refreshToken=req.user['refreshToken']
return this.authService.refreshTokens(userId,refreshToken)
  }
@UseGuards(AccessTokenGuard)
 @Get("logout")
 logout(@Req() req :Request)
 {  const userId=req.user['sub']
  console.log(userId , "idddddd")
  return this.authService.logout(userId)

 }
 

}
