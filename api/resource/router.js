const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/', async (req, res) => {
    try {
        const resources = await model.find();
        res.status(200).send(resources);
    } catch (err) {
        res.status(500).send({ ...err, message: 'Error getting resources' });
    }
});

module.exports = router;
