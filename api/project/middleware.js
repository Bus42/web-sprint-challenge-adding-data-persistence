function validateProjectName(req, res, next) {
    if (!req.body.project_name || req.body.project_name.length < 3) {
        res.status(400).send('Project name is required and should be at least 3 characters long.');
    } else {
        next();
    }
}

module.exports = {
    validateProjectName
}