const db = require('../../data/dbConfig');

async function find() {
    try {
        return await db('resources');
    } catch (error) {
        console.log({ ...error, message: "error fetching resources" });
        return error
    }
}

async function insert(resource) {
    // insert resource into resources table then return the resource
    try {
        const [id] = await db('resources').insert(resource);
        return await db('resources').where({ resource_id :id });
    } catch (error) {
        console.log({ ...error, message: "error inserting resource" });
        return error
    }
}

module.exports = {
    find,
    insert
}
