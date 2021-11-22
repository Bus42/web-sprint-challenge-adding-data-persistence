const db = require('../../data/dbConfig');

function hasTaskDescription(req, res, next) {
    if (!req.body.task_description) {
        return res.status(400).send({
            message: 'Task description is required'
        });
    } else {
        next();
    }
}

function hasProjectId(req, res, next) {
    if (!req.body.project_id) {
        return res.status(400).send({
            message: 'Project id is required'
        });
    } else {
        next();
    }
}

function projectIdIsUnique(req, res, next) {
    db('tasks')
        .where('project_id', req.body.project_id)
        .first()
        .then(task => {
            if (task) {
                return res.status(400).send({
                    message: 'Project id must be unique'
                });
            } else {
                next();
            }
        });
}

module.exports = {
    hasTaskDescription,
    hasProjectId,
    projectIdIsUnique
}
