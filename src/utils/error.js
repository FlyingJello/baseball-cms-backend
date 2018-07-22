exports.send = (error, res) => {
  console.error(error)
  res.statusCode = error.code
  res.send({
    error: true,
    data: 'An error occured : ' + error.message
  })
}

exports.AttributeException = class AttributeException {
  constructor (message) {
    this.code = 400
    this.message = message
    this.name = 'AttributeException'
  }
}

exports.AuthenticationException = class AuthenticationException {
  constructor (message) {
    this.code = 422
    this.message = message
    this.name = 'AuthenticationException'
  }
}
