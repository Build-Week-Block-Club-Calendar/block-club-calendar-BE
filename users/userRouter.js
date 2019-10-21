// Complete

const router = require('express').Router();

const restricted = require('../auth/authMiddleware.js');
const Users = require('./userModel.js');
const checkRole = require('../auth/check-admin-middleware.js');

router.get('/', restricted, checkRole('admin'), (req, res) => {
    Users.find()
        .then(users => {
            console.log('users:', users)
            console.log('here:', req.user);
            res.status(200).json({ loggedInUser: req.username, users });
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;
