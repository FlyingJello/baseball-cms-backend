exports.up = function (knex, Promise) {
  return knex.schema.createTable('Users', table => {
    table.increments('Id').primary().index()
    table.string('Username').unique().index()
    table.binary('PasswordHash')
    table.binary('PasswordSalt')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Users')
}
