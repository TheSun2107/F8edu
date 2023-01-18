const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const Course = require('./app/models/Course')
const Model = require('./app/models/Course')
const db = require('./config/db')
const app = express()
const port = 3000
const route = require('./routes')
const methodOverride = require('method-override')

db.connect()

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', handlebars.engine({ 
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})