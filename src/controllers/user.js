const User = require('../models/user')

exports.userList = (req, res) => {
  User.fetchAll()
    .then(users => {
      res.send(users)
    })
    .catch(res.send)
}

exports.userDetail = (req, res) => {
  res.send('NOT IMPLEMENTED' + req.params.id)
}
