const bk = require('../utils/database').bookshelf

module.exports = bk.Model.extend({
  tableName: 'users'
})
