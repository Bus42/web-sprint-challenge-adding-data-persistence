const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.status(200).send('Hello from /api/projects')
});

module.exports = taskRouter;
