const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const exerciceSchema = Schema({
  id:String,
  name:String,
  gifUrl:String,
  bodyPart:String,
  equipment:Array,
  target:String
})
module.exports = mongoose.model('exercice', exerciceSchema);
