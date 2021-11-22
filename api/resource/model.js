// build your `Resource` model here
const db = require('../../data/dbConfig');

async function find() {
    try {
        return await db('resources');
    } catch (error) {
        console.log({ ...error, message: "error fetching resources" });
    }
}

module.exports = {
    find,
}
