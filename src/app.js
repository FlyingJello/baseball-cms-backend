const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const session = require('express-session')
const database = require('./utils/database')

const app = express()
const PORT = process.env.PORT || 5977

router.initializeRoutes(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(session({
  store: database.session,
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    path: '/'
  }
}))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('Server started on', PORT)
})
