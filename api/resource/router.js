const express = require('express');
const router = express.Router();
const model = require('./model');
const { resourceNameIsUnique } = require('./middleware');

router.get('/', async (req, res) => {
    try {
        const resources = await model.find();
        res.status(200).send(resources);
    } catch (err) {
        res.status(500).send({ ...err, message: 'Error getting resources' });
    }
});

router.post('/', resourceNameIsUnique, (req, res) => {
    console.log(req.body);
    model.insert(req.body)
        .then(resource => {
            console.log(resource);
            return res.status(201).send(resource)
        })
        .catch(err => res.status(500).send({ ...err, message: 'Error creating resource' }));
})

module.exports = router;
