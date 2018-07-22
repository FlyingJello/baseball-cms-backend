const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../src/app')
const db = require('../src/utils/database')

chai.use(chaiHttp)

before(() => {
  return db.knex.migrate.latest()
    .then(() => db.knex('user').del())
    .then(() => db.knex('person').del())
    .then(() => db.knex('sqlite_sequence ')
      .where('name', 'user').orWhere('name', 'person').del())
})

describe('Routes', () => {
  describe('Users', () => {
    it('post /user (user creation)', done => {
      chai.request(server)
        .post('/user')
        .send({
          'login': {
            'username': 'doug',
            'password': 'admin123'
          },
          'person': {
            'firstName': 'Doug',
            'lastName': 'Bobbee',
            'email': 'doug@doug.com',
            'phone': '1234123'
          }
        })
        .end(function (err, res) {
          should.not.exist(err)
          res.should.have.status(200)
          res.body.should.have.all.keys('error', 'data')
          res.body.data.success.should.equal(true)
          done()
        })
    })

    it('post /user/authentication (user auth)', done => {
      chai.request(server)
        .post('/user/authenticate')
        .send({})
        .end(function (err, res) {
          should.not.exist(err)
          res.should.have.status(200)
          res.body.should.have.all.keys('error', 'data')
          res.body.error.should.equal(true)
          done()
        })
    })

    it('post /user/authentication (user auth)', done => {
      chai.request(server)
        .post('/user/authenticate')
        .send({
          login: {
            'username': 'doug',
            'password': 'admin123'
          }
        })
        .end(function (err, res) {
          should.not.exist(err)
          res.should.have.status(200)
          res.body.should.have.all.keys('error', 'data')
          res.body.error.should.equal(false)
          res.body.data.success.should.equal(true)
          done()
        })
    })

    it('get /user (user list)', done => {
      chai.request(server)
        .get('/user')
        .send()
        .end(function (err, res) {
          should.not.exist(err)
          res.should.have.status(200)
          res.body.should.have.all.keys('error', 'data')
          res.body.data.should.not.have.keys('password', 'salt')
          res.body.error.should.equal(false)
          done()
        })
    })

    it('get /user/:id (user info)', done => {
      chai.request(server)
        .get('/user/1')
        .send()
        .end(function (err, res) {
          should.not.exist(err)
          res.should.have.status(200)
          res.body.should.have.all.keys('error', 'data')
          res.body.data.should.not.have.keys('password', 'salt')
          res.body.error.should.equal(false)
          done()
        })
    })
  })
})
