import express from 'express';

import { getProfile } from './profile/profile.route';
import { login } from './login/login.route';
import { signup } from './signup/signup.route';

const router = express.Router();

// Define routing
router.use('/profile', getProfile);
router.use('/account/login', login);
router.use('/account/signup', signup);

export { router };
