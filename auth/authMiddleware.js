// Complete

const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'Wrong info.' });
            } else {
                req.user = {
                    username: decodedToken.username,
                };
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'No token provided.' });
    };
};

