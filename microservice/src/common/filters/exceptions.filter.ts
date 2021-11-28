import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import { ResponseInterface } from '../../config/constants.global';

@Catch(RpcException)
export class AllExceptionsFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    // console.log(exception.getError());
    const response: ResponseInterface = {
      success: false,
      body: exception.getError(),
    };
    return throwError(response);
  }
}
