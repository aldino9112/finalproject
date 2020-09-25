const express = require('express')
const routes = require('./routes/')
const session = require('express-session')


const app = express()
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))
app.use(express.static('views'))

app.use(session({
    secret: 'ecommerce app',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

const myLogger = function (req, res, next) {
    console.log(req.session)
    next()
}

app.use(myLogger)

app.use(routes)

app.listen(PORT, () => console.log(`Connected to ${PORT}`))