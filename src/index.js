const express = require('express')
const session = require('express-session')
const flash = require('express-flash')

const userRouter = require('./router/user')
const passport = require('./lib/passport')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(userRouter)

app.listen(port, () =>
  console.log(`server run on port http://localhost:${port}`)
)
