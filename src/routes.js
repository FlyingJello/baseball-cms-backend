const user = require('./controllers/user')

exports.initializeRoutes = app => {
  app.get('/user', user.userList)
  app.get('/user/:id', user.userDetail)
}
