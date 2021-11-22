const db = require('../../data/dbConfig');

async function find() {
    try {
        return await db('tasks');
    } catch (error) {
        console.log({ ...error, message: "error fetching tasks" });
    }
}

async function insert(task) {
    // insert task into tasks table then return newly created task
    db.insert(task).into('tasks')
    return db('tasks')
        .where('task_description', task.task_description).first();
}

module.exports = {
    find,
    insert
}
