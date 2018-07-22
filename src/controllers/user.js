const crypto = require('../utils/crypto')
const errorHandler = require('../utils/error')
const helper = require('../utils/helper')

const User = require('../models/user')
const Person = require('../models/person')

exports.userList = (req, res) => {
  User.fetchAll()
    .then(users => {
      users = users.toJSON().map(elem => helper.trimObject(elem, ['salt', 'password']))
      sendData(res, users)
    })
    .catch(res.send)
}

exports.userDetail = (req, res) => {
  new User().where({id: req.params.id})
    .fetch({withRelated: ['person']})
    .then(function (user) {
      if (!user) { throw new errorHandler.AttributeException('Invalid user id') }
      user = helper.trimObject(user.toJSON(), ['salt', 'password'])
      sendData(res, user)
    })
    .catch(err => errorHandler.send(err, res))
}

exports.authenticate = (req, res) => {
  new User().where('username', req.body.username)
    .fetch()
    .then(user => verifyPassword(req, user))
    .then(() => sendSuccess(res))
    .catch(err => errorHandler.send(err, res))
}

exports.createUser = (req, res) => {
  checkIfUserDontExists(req.body.login.username)
    .then(() => setPerson(req.body.person).save())
    .then(person => setUser(req.body.login, person).save())
    .then(() => sendSuccess(res))
    .catch(err => errorHandler.send(err, res))
}

// --------------------------------------------------------------

function verifyPassword (req, user) {
  if (crypto.verify(req.body.password, user.attributes.password, user.attributes.salt)) {
    req.session.authenticated = true
  } else {
    req.session.authenticated = false
    throw new errorHandler.AuthenticationException('Invalid username or password')
  }
}

function setUser (login, person) {
  if (!validateUser(login)) {
    throw new errorHandler.AttributeException('Invalid or null user attributes')
  }

  const crypted = crypto.saltHash(login.password)
  const user = Object.assign(login, crypted)

  return new User()
    .set('username', user.username)
    .set('person_id', person.id)
    .set('password', user.hash)
    .set('salt', user.salt)
}

function checkIfUserDontExists (username) {
  return new User().where({username: username})
    .fetch()
    .then(currentUser => {
      if (currentUser) {
        throw new errorHandler.AttributeException('Username is already taken')
      }
    })
}

function sendSuccess (response) {
  sendData(response, { success: true })
}

function sendData (response, data) {
  response.statusCode = 200
  response.send({
    error: false,
    data: data
  })
}

function setPerson (person) {
  if (!validatePerson(person)) {
    throw new errorHandler.AttributeException('Invalid or null person attributes')
  }

  return new Person()
    .set('first_name', person.firstName)
    .set('last_name', person.lastName)
    .set('email', person.email)
    .set('phone', person.phone)
}

function validateUser (user) {
  return user.username && user.password
}

function validatePerson (person) {
  return person.firstName && person.lastName
}
