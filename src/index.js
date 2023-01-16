const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const Course = require('./app/models/Course')
const Model = require('./app/models/Course')
const db = require('./config/db')
const app = express()
const port = 3000

db.connect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})