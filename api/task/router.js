const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/', async (req, res) => {
    try {
        const tasks = await model.find();
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send({ ...err, message: 'Error getting tasks' });
    }
});

router.post('/', (req, res) => {
    model.insert(req.body)
        .then(task => res.status(201).send(task))
        .catch(err => res.status(500).send({ ...err, message: 'Error creating task' }));
})

module.exports = router;
