import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
