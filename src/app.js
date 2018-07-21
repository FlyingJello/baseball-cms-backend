const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const session = require('express-session')
const database = require('./utils/database')

const app = express()
const PORT = process.env.PORT || 5977

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  return next()
})

app.use(session({
  store: database.session,
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {}
}))

router.initializeRoutes(app)

app.get('/api', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('Server started on', PORT)
})
