import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class RefreshTokenguard extends AuthGuard('jwt-refresh')
{

}