const router = require('express').Router();
const API = require('../apikeys.js');
let {users,cheeses} = require('../data.js');
// const apiModel = require('../models/apiModel.js');
router.get('/',(req,res) => {
res.status(200).render('api');
});
router.post('/register',(req,res) => {
  let email = req.body.email,
      user = API.createUser(email,req);
    console.log("USER-LIST");
    console.log(users);
    res.status(201).send({data:user});

})
router.get('/cheese', API.validateKey, (req,res) => {
  let today = new Date().toISOString().split("T")[0];
  console.log(today);
  res.status(200).send({data:cheeses})
})
router.post('/cheese', API.validateKey, (req,res) => {
  let cheese = {
    _id:Date.now(),
    name:req.body.cheese
  }
  cheeses.push(cheese);
  res.status(201).send({data:cheese})
});
router.put('/cheese/:id', API.validateKey, (req,res) => {
  //update a cheese with req.params.id

  res.status(200).send({data:{
    message:`cheese ${req.params.id} updated!!`
  }});
})
router.delete('/cheese/:id', API.validateKey, (req,res) => {
  //update a cheese with req.params.id

  res.status(200).send({data:{
    message:`cheese ${req.params.id} deleted!!`
  }});
})


module.exports = router;
