import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AllExceptionsFilter } from '../../common/filters/exceptions.filter';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.database}`, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
