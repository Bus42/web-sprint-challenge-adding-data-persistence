const mockResources = require('../mock/RESOURCES_MOCK_DATA')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(mockResources);
    });
};
