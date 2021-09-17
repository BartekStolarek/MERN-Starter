import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { loginValidation } from '../../validation/fields.validation';
import { User } from '../../models/user.model';
import { CustomError } from '../../util/error/custom-error.class';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate login data
    const validation = loginValidation(req.body);

    if (validation && validation.error) {
      throw new CustomError(403, validation.error.details[0].message);
    }

    // Verify if email exists
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {
      throw new CustomError(403, 'Email or password is wrong.');
    }

    // Validate password
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      throw new CustomError(403, 'Email or password is wrong.');
    }

    // Create and assing a JWT token
    const token = jwt.sign({
      _id: user._id
    }, process.env.TOKEN_SECRET, { expiresIn: '15m' });
    res.header('auth-token', token).status(200).send({});
  } catch (error) {
    next(error);
  }
};

export { login };
