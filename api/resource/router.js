const express = require('express');
const resourceRouter = express.Router();

resourceRouter.get('/', (req, res) => {
    res.status(200).send('Hello from /api/resources')
});

module.exports = resourceRouter;
