import {
  Controller,
  Inject,
  Req,
  Get,
  Body,
  UseGuards,
  Post,
  InternalServerErrorException,
  Res,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ResponseInterface } from '../../config/constants.global';
import { UserInterface } from '../user/interfaces/user.interface';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { TokenBearerInterface } from './interfaces/bearer.token.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('Auth') private readonly client: ClientProxy,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @Body() user: UserInterface,
    @Res({ passthrough: true }) res: Response,
  ): Promise<ResponseInterface> {
    try {
      const login: TokenBearerInterface = await this.authService.login(user);
      const response: ResponseInterface = {
        success: true,
        body: login,
      };
      res.cookie('access-token', login.access_token, {
        path: '/',
        expires: new Date(2025, 12, 12),
        // maxAge: 1000 * 1000,
        // sameSite: 'lax',
        httpOnly: true,
      });
      return response;
    } catch (e) {
      console.log(e);
      console.log(e);
      throw new InternalServerErrorException(e);
    }
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(JwtAuthGuard)
  async profile(@Req() req): Promise<ResponseInterface> {
    try {
      const response: ResponseInterface = {
        success: true,
        body: { username: req.user.username },
      };
      return response;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
