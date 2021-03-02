const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signupValidation, loginValidation } = require('../validation/validation');

router.post('/signup', async (req, res) => {
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
        return res.status(400).send('Email already exists');
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
});

router.post('/login', async (req, res) => {
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
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).status(200).send({});
});

module.exports = router;