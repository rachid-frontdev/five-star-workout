const mongoose = require('mongoose');
const DB_Url = process.env.DB_CONNECTION;
const Api = require('./schema/apiSchema.js');
exports.postRegister = (data) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(DB_Url).then(()=> {
      let api = new Api(data);
      return api;
    }).then(() => {
      mongoose.disconnect();
      resolve();
    }).catch(err => {
      mongoose.disconnect();
      reject(err);
    });
  })
}
