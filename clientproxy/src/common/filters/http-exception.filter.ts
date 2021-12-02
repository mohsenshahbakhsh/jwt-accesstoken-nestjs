import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ResponseInterface } from '../../config/constants.global';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();
    const statusCode = exception.getStatus();
    let res: ResponseInterface;
    if (statusCode != 422) {
      res = {
        success: false,
        body: {
          status: exception.getResponse()['statusCode'],
          message: exception,
        },
      };
      response.status(statusCode).json(res);
    } else response.status(statusCode).json(exception.getResponse());
  }
}
