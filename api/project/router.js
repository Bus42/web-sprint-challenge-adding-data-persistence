const express = require('express');
const router = express.Router();
const model = require('./model');
const {validateProjectName} = require('./middleware')

router.get('/', async (req, res) => {
    try {
        const projects = await model.find();
        res.status(200)
            .send(projects);
    } catch (err) {
        res.status(500)
            .send({ ...err, message: 'Error getting projects' });
    }
});

router.post('/', validateProjectName, (req, res) => {
    console.log(req.body);
    model.insert(req.body)
        .then(project => res.status(201).send(project))
        .catch(err => res.status(500).send({ ...err, message: 'Error creating project' }));
})

module.exports = router;
