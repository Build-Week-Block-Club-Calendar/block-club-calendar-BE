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
                // req.decodedToken = decodedToken;
                req.user = {
                    id: decodedToken.subject,
                    username: decodedToken.username,
                    role: decodedToken.role,
                };
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'No token provided.' });
    };
};

