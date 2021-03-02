import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { loginValidation } from '../../validation/fields.validation';
import { User } from '../../models/user.model';

const login = async (req: Request, res: Response, next: NextFunction) => {
  // Validate login data
  const validation = loginValidation(req.body);

  if (validation && validation.error) {
    return res.status(400).send({
      message: validation.error.details[0].message
    });
  }

  // Verify if email exists
  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return res.status(400).send({
      message: 'Email or password is wrong'
    });
  }

  // Validate password
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(400).send({
      message: 'Email or password is wrong'
    });
  }

  // Create and assing a JWT token
  const token = jwt.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET, { expiresIn: '15m' });
  res.header('auth-token', token).status(200).send({});
};

export { login };
