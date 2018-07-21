exports.up = function (knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments('id').primary().index()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email')
    table.string('phone')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('person')
}
