const mockProjectResources = require('../mock/PROJECT_RESOURCES_MOCK_DATA')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert(mockProjectResources);
    });
};
