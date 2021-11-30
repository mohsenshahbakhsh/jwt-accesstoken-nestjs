import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './services/app/app.module';

console.log(__dirname);
async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + TCP)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   *  transport: Transport.TCP,
   *  options: { retryAttempts: 5, retryDelay: 3000 },
   * });
   * await app.listenAsync();
   *
   */
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: { retryAttempts: 5, retryDelay: 3000 },
  // });

  // await app.startAllMicroservicesAsync();
  // await app.listen(4000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3000,
        retryAttempts: 5,
        retryDelay: 3000,
      },
    },
  );
  await app.listenAsync();
}
bootstrap();
