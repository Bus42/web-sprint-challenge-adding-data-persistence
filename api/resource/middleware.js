const db = require('../../data/dbConfig');

function resourceNameIsUnique(req, res, next) {
    const { resource_name } = req.body;
    db('resources')
        .where('resource_name', resource_name)
        .first()
        .then(resource => {
            if (resource) {
                res.status(400).json({ message: `Resource ${resource_name} already exists` });
            } else {
                next();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

module.exports = {
    resourceNameIsUnique
}
