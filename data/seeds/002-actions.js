exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'Rosa', project_id: 3},
        {name: 'Phil', project_id: 2},
        {name: 'Mark', project_id: 1}
      ]);
    });
};