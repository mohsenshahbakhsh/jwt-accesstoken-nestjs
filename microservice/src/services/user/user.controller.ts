import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { ResponseInterface } from '../../config/constants.global';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ user: 'signup' })
  async signup(user: CreateUserDto): Promise<ResponseInterface> {
    try {
      user.confirmed = false;
      const createdUser = (await this.userService.create(user)).toJSON();
      const { password, ...rest } = createdUser;
      const res: ResponseInterface = {
        success: true,
        body: rest,
      };
      return res;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @MessagePattern({ user: 'update' })
  async update(user: UpdateUserDto): Promise<ResponseInterface> {
    try {
      const updatedUser = await this.userService.update(user);
      const { password, ...rest } = updatedUser;
      const res: ResponseInterface = {
        success: true,
        body: rest,
      };
      return res;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @MessagePattern({ user: 'findByUsername' })
  async findByUsername(username: string): Promise<ResponseInterface> {
    try {
      const user = await this.userService.findOne(username);
      const res: ResponseInterface = {
        success: true,
        body: user,
      };
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
