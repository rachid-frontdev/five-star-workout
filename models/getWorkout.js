const mongoose = require('mongoose');
const DB_Url = process.env.DB_CONNECTION;
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
