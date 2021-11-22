const express = require('express');

const apiRouter = express.Router();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

apiRouter.use('/project', projectRouter);
apiRouter.use('/resource', resourceRouter);
apiRouter.use('/task', taskRouter);

module.exports = apiRouter;
