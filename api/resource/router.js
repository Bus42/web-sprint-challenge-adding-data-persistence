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

router.post('/', (req, res) => {
    // create resource, then return newly created resource from response
    model.insert(req.body)
        .then(resource => res.status(201).send(resource))
        .catch(err => res.status(500).send({ ...err, message: 'Error creating resource' }));
})

module.exports = router;
