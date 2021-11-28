import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user.controller';
@Module({
  imports: [
    ClientsModule.register([{ name: 'User', transport: Transport.TCP }]),
  ],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
