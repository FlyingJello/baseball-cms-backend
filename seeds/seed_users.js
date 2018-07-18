
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'doug'},
        {name: 'roberta'},
        {name: 'madame'}
      ])
    })
}
