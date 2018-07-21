exports.send = (error, res) => {
  console.error(error)
  res.send({
    error: true,
    data: 'An error occured : ' + error.message
  })
}

exports.AttributeException = class AttributeException {
  constructor (message) {
    this.message = message
    this.name = 'AttributeException'
  }
}

exports.AuthenticationException = class AuthenticationException {
  constructor (message) {
    this.message = message
    this.name = 'AuthenticationException'
  }
}
