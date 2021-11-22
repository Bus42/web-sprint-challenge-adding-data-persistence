const express = require('express');

const apiRouter = express.Router();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

apiRouter.use('/projects', projectRouter);
apiRouter.use('/resources', resourceRouter);
apiRouter.use('/tasks', taskRouter);
apiRouter.use('/', (req, res) => {
    res.status(200).send('Hello from /api');
})

module.exports = apiRouter;
