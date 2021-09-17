import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../util/error/custom-error.class';

const errorHandlerMiddleware = (error: CustomError | Error, req: Request, res: Response, next: NextFunction) => {
  // For already sent headers, we want to redirect error handling to the built-in handler
  if (res.headersSent) {
    return;
  }
  if (error.stack) {
    console.error(error.stack);
  }

  // Build default error data
  let status: number = 500;
  let message: string = 'Internal Server Error';

  if (error instanceof CustomError) {
    status = error.status;
    message = error.message;
  }

  res.status(status).send({
    message: message
  });
};

export { errorHandlerMiddleware };
