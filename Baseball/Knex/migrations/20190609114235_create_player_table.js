
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Players', table => {
        table.increments('Id').primary().index()
        table.string('FirstName')
        table.string('LastName')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Players')
};
