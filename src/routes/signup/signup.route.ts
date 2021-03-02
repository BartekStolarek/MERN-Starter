import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import { signupValidation } from '../../validation/fields.validation';
import { User } from '../../models/user.model';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  // Validate signup data
  const validation = signupValidation(req.body);

  if (validation && validation.error) {
    return res.status(400).send({
      message: validation.error.details[0].message
    });
  }

  // Verify if user is already in the database
  const emailExist = await User.findOne({
    email: req.body.email
  });

  if (emailExist) {
    return res.status(400).send({
      message: 'User with this email already exists'
    });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Save new user in the Database
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.status(200).send({
      message: 'New user was successfully created.'
    });
  } catch (error) {
    res.status(400).send({
      message: 'An error occurred while trying to create a new user.'
    });
  }
};

export { signup };
