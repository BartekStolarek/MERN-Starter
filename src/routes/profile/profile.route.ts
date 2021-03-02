import { Request, Response, NextFunction } from 'express';

const getProfile = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    message: 'Test profile data'
  });
};

export { getProfile };
