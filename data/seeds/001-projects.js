exports.seed = function(knex, Promise) {
  
  return knex('projects')
  .truncate()
  .then(function() {
  // 00-cleanup.js seed already deleted records
  // we just worry about seeding records and other seeds
        return knex('projects').insert([
          {id: 1},
          {name: 'Sprint Challenge'},
          {description: 'RDBMS and SQL - Projects & Actions'},
          {completed: 0}
        ]);
      })
    };
  