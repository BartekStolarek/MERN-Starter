import Joi from 'joi';

// Signup validation
const signupValidation = data => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  // Validate the data before saving user
  return schema.validate(data);
};

// Login validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  // Validate the data before saving user
  return schema.validate(data);
};

export { signupValidation, loginValidation };
