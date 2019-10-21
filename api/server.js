// Complete

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

const authRouter = require('../auth/authRouter.js');
const eventRouter = require('../events/eventRouter.js');
const userRouter = require('../users/userRouter.js');

server.use('/auth', authRouter);
server.use('/events', eventRouter);
server.use('/users', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server up and running' });
});

module.exports = server;