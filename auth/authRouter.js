// Complete

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const secret = require('../config/secrets.js');
const Users = require('../users/userModel.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({ message: 'Could not add the user.', error });
        });
});

router.post('/login', (req, res) => {
    let { username, password, role } = req.body;
    console.log(username, password, role);
    Users.findBy({ username })
        .first()
        .then(user => {
            console.log(user);
            if (user && password === user.password) {
                const token = generateToken(user);
                console.log('token:', token);

                res.status(200).json({ message: `Welcome, ${user.username}.`, token, });
            }
            else if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                console.log('token:', token);

                res.status(200).json({ message: `Welcome, ${user.username}.`, token, });
            } 
            else {
                res.status(401).json({ message: 'Invalid credentials.' });
            };
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

function generateToken(user) {
    const payload = {
      username: user.username,
      subject: user.id,
      role: user.role,
    };
    const options = {
      expiresIn: '1h',
    };
  
    return jwt.sign(payload, secret.jwtSecret, options);
  }

module.exports = router;