const mongoose = require('mongoose');
const DB_Url = 'mongodb+srv://rachid2000r:01012000r_R@cluster0.qyl4y.mongodb.net/workoutDb?retryWrites=true&w=majority';
const opts = {
useNewUrlParser: true,
useUnifiedTopology: true
};
const Workout = require('./schema/workoutSchema.js');
exports.getWorkout = () => {
  return new Promise((resolve,reject) => {
  mongoose.connect(DB_Url,opts).then(() => {
    return Workout.find({})
}).then((exercise) => {
  mongoose.disconnect();
  resolve(exercise);
}).catch(err => {
  mongoose.disconnect();
  reject(err);
});
  })
}
