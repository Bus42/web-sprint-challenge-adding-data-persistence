
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.text('project_name').notNullable();
            tbl.text('project_description');
            tbl.integer('project_completed').defaultTo(0);
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id');
            tbl.text('resource_name').notNullable().unique();
            tbl.text('resource_description');
        })
        // create table tasks with columns: task_id, task_description required, task_notes, task_completed default to 0, project_id required points to projects table
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.text('task_description').notNullable();
            tbl.text('task_notes');
            tbl.integer('task_completed').defaultTo(0);
            tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('CASCADE');
        })
        // create table project_resources with columns: project_id required, resource_id required. project_id points to projects table, resource_id points to resources table. combine project_id and resource_id to create a unique key
        .createTable('project_resources', tbl => {
            tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('CASCADE');
            tbl.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources').onDelete('CASCADE');
            tbl.unique(['project_id', 'resource_id']);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
