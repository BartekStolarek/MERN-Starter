import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).send({
      message: 'Access denied'
    });
  }

  try {
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId: string = decodedToken._id;
    res.locals.userId = userId;
    next();
  } catch (error) {
    res.status(400).send({
      message: 'Invalid Authentication Token'
    });
  }
};

export { validateToken };
