const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err)=>{
    if (err) {
      console.log(err)
    }
    console.log('DB is connect!')
})