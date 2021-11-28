import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UserInterface } from './interfaces/user.interface';
import { RpcException } from '@nestjs/microservices';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private readonly UserModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    try {
      const password = createUserDto.password;
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);
      createUserDto.password = hash;
      const userModel = new this.UserModel(createUserDto);
      return await userModel.save();
    } catch (e) {
      if (e.code && e.code == 11000) {
        throw new RpcException({
          message: 'Unique index violation',
          status: HttpStatus.UNPROCESSABLE_ENTITY,
        });
      }
      console.log(e);
      throw new RpcException({
        message: 'Something went wrong',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async update(updateUser: UpdateUserDto): Promise<any> {
    try {
      const user = await this.findOne(updateUser.username);
      if (user) {
        let password = user.password;
        if (updateUser.password) {
          const salt = await bcrypt.genSalt();
          const hash = await bcrypt.hash(updateUser.password, salt);
          password = hash;
        }
        updateUser.password = password;
        updateUser.name = updateUser.name || user.name;
        updateUser.email = updateUser.email || user.email;
        return await this.UserModel.updateOne({ _id: user._id }, updateUser);
      } else return user;
    } catch (e) {
      if (e.code && e.code == 11000) {
        throw new RpcException({
          message: 'Unique index violation',
          status: HttpStatus.UNPROCESSABLE_ENTITY,
        });
      }
      console.log(e);
      throw new RpcException({
        message: 'Something went wrong',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async findOne(username: string): Promise<UserInterface> {
    try {
      const user = await this.UserModel.findOne({ username });
      return user;
    } catch (e) {
      console.log(e);
      throw new RpcException({
        message: 'Something went wrong',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
  async findAll(): Promise<User[]> {
    try {
      return this.UserModel.find().exec();
    } catch (e) {
      console.log(e);
      throw new RpcException({
        message: 'Something went wrong',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
