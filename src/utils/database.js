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
} else if (process.env.NODE_ENV === 'TEST') {
  console.log('Setting up TEST database')
  dbConfig.connection = {
    filename: './db/test.db'
  }
}

const knex = require('knex')(dbConfig)
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
exports.session = new KnexSessionStore({knex: knex})
exports.bookshelf = require('bookshelf')(knex)
exports.knex = knex
