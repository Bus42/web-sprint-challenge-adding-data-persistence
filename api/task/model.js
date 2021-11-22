const db = require('../../data/dbConfig');

async function find() {
    try {
        return await db('tasks');
    } catch (error) {
        console.log({ ...error, message: "error fetching tasks" });
    }
}

async function insert(task) {
    try {
        const [id] = await db('tasks').insert(task);
        return await db('tasks').where({ task_id: id }).first();
    } catch (error) {
        console.log({ ...error, message: "error inserting task" });
        return error
    }
}

module.exports = {
    find,
    insert
}
