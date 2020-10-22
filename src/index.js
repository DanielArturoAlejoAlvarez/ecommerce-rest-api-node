const config = require('./config/config')
require('./config/database')

const app = require('./app')

app.listen(config.PORT, ()=>{
  console.log(`Server running in port: ${config.PORT}`)
})

