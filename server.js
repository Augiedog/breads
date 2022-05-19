// Configuration
require('dotenv').config()
const express = require('express')
const app = express()
const breadsController = require('./controllers/breads_controller.js')
const methodOverride =require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})
app.use('/breads', breadsController)

// LISTEN
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})