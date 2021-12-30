const mongoose = require('mongoose');
const DB_Url = process.env.DB_CONNECTION;
const opts = {
useNewUrlParser: true,
useUnifiedTopology: true
};
const Workout = require('./schema/workoutSchema.js');
exports.addByAdmin = (data) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(DB_Url).then(() => {
            let createWorkout = new Workout(data);
            return createWorkout.save()
         })
     .then(() => {
       mongoose.disconnect();
       resolve();
       // close connection
     }).catch(err => {
       mongoose.disconnect();
       reject(err);
     });
  });
}
