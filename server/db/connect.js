var mongoose = require('mongoose')
var dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGODB_DATABASE)

module.exports = mongoose