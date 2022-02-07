const router = require('express').Router();
const workoutGetModel = require('../models/getWorkout.js');
const workoutModel = require('../models/addworkout.js');
const speedLimiter = require('../slowdown.js');
const rateLimit = require('../ratelimit.js');

let cacheTime;
let cachedData;
router.get('/',speedLimiter,(req,res) => {
  res.render('index')
});
router.get('/exercises', rateLimit,speedLimiter,(req,res) => {
  if(cacheTime && cacheTime > Date.now() - 30 * 1000) {
    return res.json(cachedData);
  }
  workoutGetModel.getWorkout().then(data => {
    cachedData = data;
    cacheTime = Date.now();
    data.cacheTime = cacheTime;
    //respond to this request with data from amazon scarper api
    return res.json(data)
  }).catch(err => {
    return console.log(err);
  });
});
router.post('/', (req,res) => {
const {id,name,gifUrl,bodyPart,equipment,target} = req.body;
  function turnToArray() {
    let words = equipment.split(',');
    let result = words.filter(word => word.trim().length > 0);
    return result;
  }
workoutModel.addByAdmin({
  id,name,gifUrl,bodyPart,equipment:turnToArray(),target
}).then(() => res.redirect('/')).catch((e) => res.end(e));
});
module.exports = router;
