import { Request, Response, NextFunction } from 'express';

import { User } from '../../models/user.model';

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  // Get userId from middleware and respond with user data
  try {
    const userId: string = res.locals.userId;
    const user = await User.findById(userId);

    return res.status(200).send({
      user: {
        name: user.name,
        email: user.email,
        signupDate: user.signupDate
      }
    });
  } catch (error) {
    next(error);
  }
};

export { getProfile };
