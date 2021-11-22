const express = require('express');
const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
    res.status(200).send('Hello from /api/projects')
});

module.exports = projectRouter;
