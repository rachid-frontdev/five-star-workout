const router = require('express').Router();
const workoutGetModel = require('../models/getWorkout.js');
const workoutModel = require('../models/addworkout.js');
const path = require('path');

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))

});
router.get('/exercises', (req,res) => {
  workoutGetModel.getWorkout().then(data => {
    console.log(data);
    res.json(data)
  }).catch(err => {
    console.log(err);
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
