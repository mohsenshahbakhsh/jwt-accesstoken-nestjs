import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3000,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({ credentials: true, origin: 'http://localhost:3006' });
  app.use(cookieParser());
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
