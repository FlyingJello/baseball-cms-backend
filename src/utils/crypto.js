const crypto = require('crypto')

const getSalt = length => crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)

const sha512 = (password, salt) => {
  let hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  return hash.digest('hex')
}

exports.saltHash = (password) => {
  let salt = getSalt(32)
  let hash = sha512(password, salt)
  return { salt, hash }
}

exports.verify = (password, hash, salt) => {
  let newHash = sha512(password, salt)
  return newHash === hash
}
