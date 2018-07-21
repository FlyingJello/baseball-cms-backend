exports.up = function (knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary().index()
    table.integer('person_id').references('id').inTable('person')
    table.string('username').unique().index()
    table.string('password')
    table.string('salt')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user')
}
