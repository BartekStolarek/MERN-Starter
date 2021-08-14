import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import { signupValidation } from '../../validation/fields.validation';
import { User } from '../../models/user.model';
import { CustomError } from '../../util/error/custom-error.class';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate signup data
    const validation = signupValidation(req.body);

    if (validation && validation.error) {
      throw new CustomError(422, validation.error.details[0].message);
    }

    // Verify if user is already in the database
    const emailExist = await User.findOne({
      email: req.body.email
    });

    if (emailExist) {
      throw new CustomError(422, 'User with this email already exists.');
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

    const savedUser = await user.save();
    res.status(200).send({
      message: 'New user was successfully created.'
    });
  } catch (error) {
    next(error);
  }
};

export { signup };
