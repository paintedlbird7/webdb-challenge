exports.seed = function(knex, Promise) {
  
  return knex('projects')
  .truncate()
  .then(function() {
  // 00-cleanup.js seed already deleted records
  // we just worry about seeding records and other seeds
        return knex('projects').insert([
          {name: 'web17'},
          {name: 'web18'},
          {name: 'web19'}
        ]);
      })
    };
  