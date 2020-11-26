const express = require('express')

const userController = require('../controller/user')
const isAuth = require('../middlewares/auth')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', userController.register)

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', userController.login)

router.get('/whoami', isAuth, userController.whoami)

module.exports = router
