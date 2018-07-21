const crypto = require('../src/utils/crypto')

exports.seed = function (knex, Promise) {
  return knex('user').del()
    .then(() => knex('person').del())
    .then(() => knex('person').insert({
      first_name: 'Doug',
      last_name: 'Smitt',
      email: 'doug@email.com',
      phone: '14187775454'
    }))
    .then(person => {
      const crypted = crypto.saltHash('admin123')
      return knex('user').insert({
        username: 'doug',
        person_id: person[0],
        password: crypted.hash,
        salt: crypted.salt
      })
    })
    .then(() => knex('person').insert({
      first_name: 'Jean-Philippe',
      last_name: 'Levesque',
      email: 'reagunz@email.com'
    }))
    .then(person => {
      const crypted = crypto.saltHash('admin123')
      return knex('user').insert({
        username: 'reagunz',
        person_id: person[0],
        password: crypted.hash,
        salt: crypted.salt
      })
    })
    .then(() => knex('person').insert({
      first_name: 'Hugues',
      last_name: 'Trottier',
      phone: '14187775454'
    }))
    .then(person => {
      const crypted = crypto.saltHash('admin123')
      return knex('user').insert({
        username: 'amiwyn',
        person_id: person[0],
        password: crypted.hash,
        salt: crypted.salt
      })
    })
}
