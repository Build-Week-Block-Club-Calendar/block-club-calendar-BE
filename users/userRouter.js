// Complete

const router = require('express').Router();

const restricted = require('../auth/authMiddleware.js');
const Users = require('./userModel.js');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ loggedInUser: req.username, users });
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;
