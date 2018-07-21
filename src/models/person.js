const bk = require('../utils/database').bookshelf
const User = require('./user')

module.exports = bk.Model.extend({
  tableName: 'person',
  user: () => this.hasOne(User, 'user_id')
})
