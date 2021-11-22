const db = require('../../data/dbConfig');

async function find() {
    try {
        const projects = await db('projects');
        return projects.map(project => {
            return { ...project, project_completed: project.project_completed ? true : false };
        });
    } catch (error) {
        console.log({ ...error, message: "error fetching projects" });
        return error
    }
}

async function insert(project) {
    try {
        const [id] = await db('projects').insert(project);
        const newProject = await db('projects').where({ project_id: id }).first();
        return { ...newProject, project_completed: newProject.project_completed ? true : false };
    } catch (error) {
        console.log({ ...error, message: "error inserting project" });
        return error
    }
}

module.exports = {
    find,
    insert
}
