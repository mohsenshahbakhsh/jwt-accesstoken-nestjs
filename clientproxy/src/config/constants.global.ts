import { ClientTCP } from '@nestjs/microservices';

export interface ResponseInterface {
  success?: boolean;
  message?: string;
  body?: any;
}

export const client = async (pattern, data) => {
  const client = new ClientTCP({
    host: 'microservice',
    port: 3000,
  });
  await client.connect();
  return await client.send(pattern, data).toPromise();
};
