import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CustomError } from '../../util/error/custom-error.class';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');

  if (!token) {
    throw new CustomError(401, 'Unauthorized');
  }

  try {
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId: string = decodedToken._id;
    res.locals.userId = userId;
    next();
  } catch (error) {
    throw new CustomError(401, 'Unauthorized');
  }
};

export { validateToken };
