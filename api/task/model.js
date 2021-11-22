const db = require('../../data/dbConfig');

async function find() {
    try {
        const tasks = await db('tasks as t')
            .leftJoin('projects as p', 't.project_id', 'p.project_id')
            .select('t.task_id', 't.task_description', 't.task_notes')
        return tasks.map(task => {
            return { ...task, task_completed: task.task_completed ? true : false, project_completed: task.project_completed ? true : false };
        })
    } catch (error) {
        console.log({ ...error, message: "error finding task" });
        return error
    }
}

async function insert(task) {
    try {
        const [id] = await db('tasks').insert(task);
        const newTask = await db('tasks').where({ task_id: id }).first();
        return { ...newTask, task_completed: newTask.task_completed ? true : false };
    } catch (error) {
        console.log({ ...error, message: "error inserting task" });
        return error
    }
}

module.exports = {
    find,
    insert
}
