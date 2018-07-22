exports.send = (error, res) => {
  console.error(error)
  res.statusCode = error.code
  res.send({
    error: true,
    data: 'An error occured : ' + error.message
  })
}

exports.RequestParameterException = class RequestParameterException {
  constructor (message) {
    this.code = 200
    this.message = message
    this.name = 'RequestParameterException'
  }
}

exports.AuthenticationException = class AuthenticationException {
  constructor (message) {
    this.code = 200
    this.message = message
    this.name = 'AuthenticationException'
  }
}
