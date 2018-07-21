const bk = require('../utils/database').bookshelf
const Person = require('./person')

module.exports = bk.Model.extend({
  tableName: 'user',
  person: () => this.hasOne(Person, 'person_id')
})
