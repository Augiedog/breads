// Configuration
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const breadsController = require('./controllers/breads_controller.js')
const bakerController = require('./controllers/baker_controller.js')
const methodOverride =require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.use('/breads', breadsController)
app.use('/baker', bakerController)
// ROUTES
app.get('/', (req, res) => {
    res.render('index')
    //res.send('Welcome to an Awesome App about Breads.')
})
app.get('*', (req, res) => {
  res.render('error') 
})

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// LISTEN
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})