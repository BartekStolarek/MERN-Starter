const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
    // Validate data
    const validation = registerValidation(req.body);

    if (validation && validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }

    // Check if user is already in the database
    const emailExist = await User.findOne({
        email: req.body.email
    });

    if (emailExist) {
        return res.status(400).send('Email already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Save user in the DB
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({
            user: user._id
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    // Validate data
    const validation = loginValidation(req.body);

    if (validation && validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }

    // Check if email exists
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(400).send('Email or password is wrong');
    }

    // Validate password
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.status(400).send('Email or password is wrong');
    }

    res.send('You are logged in!');
});

module.exports = router;