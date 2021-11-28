import { Controller, UseGuards, Request } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
