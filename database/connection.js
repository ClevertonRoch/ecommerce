const mongoose = require('mongoose')

module.exports = await mongoose.connect(process.env.MONGO_URL || 8080).then(() => {
  console.log('Connection ok')
}).catch((err) => {
  console.log(err)
})
