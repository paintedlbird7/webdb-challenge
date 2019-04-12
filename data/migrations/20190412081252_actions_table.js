// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
      // primary key called id, integer, auto-increment
      tbl.increments();
  
      tbl.string('name', 128).notNullable();
  //projects = cohorts
  //actions = students
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  
      tbl.timestamps(true, true);
    });
  };
  
  // how can I undo the changes
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };