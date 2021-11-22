const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./apiRouter');

const server = express();

const middleware = [
    express.json(),
    morgan('dev')
]

server.use(middleware);

server.use('/api', apiRouter);

module.exports = server;
