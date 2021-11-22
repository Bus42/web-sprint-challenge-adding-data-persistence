const db = require('../../data/dbConfig');

async function find() {
    try {
        return await db('projects');
    } catch (error) {
        console.log({ ...error, message: "error fetching projects" });
        return error
    }
}

async function insert(project) {
    try {
        const [id] = await db('projects').insert(project);
        return await db('projects').where({ project_id: id }).first();
    } catch (error) {
        console.log({ ...error, message: "error inserting project" });
        return error
    }
}

module.exports = {
    find,
    insert
}
