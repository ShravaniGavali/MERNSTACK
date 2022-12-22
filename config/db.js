const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
module.exports = () => {
  mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
      console.log('Database connection failed')
      throw (error)
    }
    console.log('Database connected successfully ')
  })
}
