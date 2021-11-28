import {
  Controller,
  Inject,
  Get,
  Body,
  UseGuards,
  Post,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(@Inject('User') private readonly client: ClientProxy) {}

  @Post('signup')
  async signup(@Body() user: CreateUserDto): Promise<UserInterface> {
    try {
      const response = await this.client
        .send<UserInterface>({ user: 'signup' }, user)
        .toPromise();
      return response;
    } catch (e) {
      if (e.body.status == 422) throw new UnprocessableEntityException(e);
      throw new InternalServerErrorException(e);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('find')
  find(@Body() user: UserInterface): Observable<UserInterface> {
    try {
      const username = user.username;
      return this.client.send<UserInterface>(
        { user: 'findByUsername' },
        username,
      );
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  update(@Body() user: UpdateUserDto): Observable<UserInterface> {
    try {
      return this.client.send<UserInterface>({ user: 'update' }, user);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
