exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {"id": 1,
        "description": 'take an action',
        "notes": 'will complete mvp for this challenge',
        "completed": true}
      ]);
    });
};