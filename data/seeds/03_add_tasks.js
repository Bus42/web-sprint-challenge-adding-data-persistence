const mockTasks = require('../mock/TASKS_MOCK_DATA');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(mockTasks);
    });
};
