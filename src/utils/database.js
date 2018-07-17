const dbConfig = require('../../knexfile').development

if (process.env.NODE_ENV === 'PROD') {
  dbConfig.client = 'postgresql'
  dbConfig.connection = {
    database: 'baseball',
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  }
  dbConfig.pool = {
    min: 1,
    max: 4
  }
}

const knex = require('knex')(dbConfig)
module.exports = require('bookshelf')(knex)
