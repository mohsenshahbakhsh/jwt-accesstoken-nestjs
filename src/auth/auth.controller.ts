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
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { ResponseInterface } from "../config/constants.global";
import { UserInterface } from "./interfaces/user.interface";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { TokenBearerInterface } from "./interfaces/token.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @UseGuards(LocalAuthGuard)
  async login(
    @Body() user: UserInterface,
    @Res({ passthrough: true }) res: Response
  ): Promise<ResponseInterface> {
    try {
      const login = await this.authService.login(user);
      const response: ResponseInterface = {
        success: true,
        body: login,
      };
      res.cookie("access-token", login.access_token, {
        path: "/",
        expires: new Date(new Date().getFullYear() + 1, 12, 12),
        httpOnly: true,
      });
      res.cookie("refresh-token", login.refresh_token, {
        path: "/",
        expires: new Date(new Date().getFullYear() + 1, 12, 12),
        httpOnly: true,
      });
      return response;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e);
    }
  }

  @Get("profile")
  @UseGuards(AuthGuard("jwt"))
  @UseGuards(JwtAuthGuard)
  async profile(@Req() req): Promise<ResponseInterface> {
    try {
      console.log(req.cookies);
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
