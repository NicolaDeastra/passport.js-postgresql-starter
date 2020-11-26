const { User } = require('../models')
const passport = require('../lib/passport')

const userController = {
  register: async (req, res, next) => {
    const { body } = req

    try {
      const user = await User.register(body)

      res.redirect('/login')
    } catch (err) {
      next(err)
    }
  },

  login: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    failureMessage: 'Login failure',
  }),

  whoami: (req, res) => {
    res.render('profile', req.user.dataValues)
  },
}

module.exports = userController
