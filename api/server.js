// Complete

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const adminRouter = require('../admin/adminRouter.js');
const authRouter = require('../auth/authRouter.js');
const eventRouter = require('../events/eventRouter.js');
const goingRouter = require('../going/goingRouter.js');
// const userRouter = require('../users/userRouter.js');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/api/admin', adminRouter);
server.use('/api/auth', authRouter);
server.use('/api/events', eventRouter);
server.use('/api/going', goingRouter);
// server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server up and running' });
});

module.exports = server;