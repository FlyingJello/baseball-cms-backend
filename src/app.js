const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 5977

router.initializeRoutes(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('Server started on', PORT)
})
