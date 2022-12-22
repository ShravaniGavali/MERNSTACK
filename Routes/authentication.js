/* eslint-disable no-undef */
const { Router } = require('express')
const users = require('../models/users')

const authRouter = Router()

authRouter.post('/login', (req, res) => {
  return res.status(200).json({
    message: 'login successful'
  })
})

authRouter.post('/register', (req, res) => {
  return Promise.resolve()
    .then(() => {
      if (!(req.body.email && req.body.username && req.body.password)) {
        throw Error('email, username or password is not found')
      }
      return users.create(req.body)
    })
    .then(data => {
      data = data.toJSON()
      delete data.password

      return res.status(200).json({
        message: 'registered successful',
        data: data
      })
    })
    .catch(error => {
      return res.status(422).json({
        message: 'register failed',
        error: error.message
      })
    })
})
authRouter.post('/verify', (req, res) => {
  return res.status(200).json({
    message: 'email verified successful'
  })
})

module.exports = authRouter
