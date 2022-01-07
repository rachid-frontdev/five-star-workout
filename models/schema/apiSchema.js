const mongoose = require('mongoose');
const apiSchema = mongoose.Schema({
  api_key:String,
  email:String,
  host:String,
  usage:Array
})
module.exports = mongoose.model('api', apiSchema);
