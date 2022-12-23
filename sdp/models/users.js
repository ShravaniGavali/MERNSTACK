/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')
const { generateOTP } = require('../utils')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true},
  otp: {
    type: String
  },
  verified: {
    type: Boolean
    // default:otp
  }

})

schema.pre('save', function () {
  this.otp = generateOTP()
})
module.exports = mongoose.model('user', schema)
