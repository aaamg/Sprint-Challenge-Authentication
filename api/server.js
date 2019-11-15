const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//const authenticate = require('../auth/authenticate-middleware.js');
const authenticate = require('../auth/restricted-middleware.js.js.js');
const authRouter = require('../auth/auth-router.js.js.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;

//done
