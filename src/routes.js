const user = require('./controllers/user')

exports.initializeRoutes = app => {
  app.get('/user', user.userList)
  app.get('/user/:id', user.userDetail)
  app.post('/user/authenticate', user.authenticate)
  app.post('/user', user.createUser)
}
