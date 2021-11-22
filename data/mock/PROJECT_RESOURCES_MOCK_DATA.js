const tasks = require('./TASKS_MOCK_DATA');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMockProjectResources() {
    let projectResources = [];
    for (let i = 0; i < tasks.length; i++) {
        const thisResource = {
            project_id: tasks[i].project_id,
            resource_id: getRandomInt(1, 20),
            task_id: i + 1,
        };
        projectResources.push(thisResource);
    }

    return projectResources;
}

const mockProjectResources = createMockProjectResources();

module.exports = mockProjectResources;
