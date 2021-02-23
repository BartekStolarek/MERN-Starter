const router = require('express').Router();
const verify = require('../routes/verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        profile: 'Profile Name!',
        other: 'Other stuff!'
    });
})

module.exports = router;