import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';

@Catch()
export class BadRequestFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const response = host.switchToHttp().getResponse();

      console.error(`Error:`, exception.getResponse());
      response.status(400).send({
        status: 400,
        message: 'BAD_REQUEST',
      });
    }
  }
}
