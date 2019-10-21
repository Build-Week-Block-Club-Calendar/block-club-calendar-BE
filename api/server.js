// Complete

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const eventRouter = require('../events/eventRouter.js');
const userRouter = require('../users/userRouter.js');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/events', eventRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server up and running' });
});

module.exports = server;