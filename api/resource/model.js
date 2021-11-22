// build your `Resource` model here
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
    try {
        // create a new resource, then return the newly create resource
        db.insert(resource).into('resources');
        return await db('resources')
            .where('resource_name', resource.resource_name)
            .first();
    } catch (error) {
        console.log({ ...error, message: "error inserting resource" });
        return error
    }
}

module.exports = {
    find,
    insert
}
