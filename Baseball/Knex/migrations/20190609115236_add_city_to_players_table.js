
exports.up = function(knex, Promise) {
    return knex.schema.table('players', table => {
        table.string('City')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('players', table => {
        table.dropColumn('City')
    })
};
