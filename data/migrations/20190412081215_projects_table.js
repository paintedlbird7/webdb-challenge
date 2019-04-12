exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
    
    tbl.increments()
    tbl.boolean('completed');
    tbl.string('description');
    tbl
    .string('name',128)
    .notNullable()
    .unique()
  })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableifExists('projects')
  };
  