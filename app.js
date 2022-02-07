const request = require('request');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const apiRoutes = require('./routes/apiRoutes.js');
const speedLimiter = require("./slowdown.js");
const rateLimit = require('./rateLimit.js');
const  workoutRoutes = require('./routes/workout-routes.js');
// custom module
app.enable("trust proxy");
app.set('views', 'views');
app.set('view engine', 'ejs')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1);
/*
(req,res,next) => {
// const apiKeys = new Map();
// apiKeys.set('12345',true);
  const api_key = req.get('X-API-KEY');
  if(apiKeys.has(api_key)) {
    return next();
  } else {
    const error = new Error('invalid API KEY');
    next(error);
  }
},*/
  const params  = new URLSearchParams({
    api_key:process.env.API_KEY,
    autoparse:true,
    url:`https://www.amazon.com/dp/`
  });



// app.use('/api',apiRoutes)
app.use(workoutRoutes);
const port = process.env.PORT || '4000';
app.listen(port, () => {
  console.log("connected to API");
})

// app.get('/products/:productId',async(req,res) => {
// try {
//   const {productId} = req.params;
//   const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
//     console.log(response);
//   res.json(response)
// } catch (e) {
//   res.json(e)
// }
// })
// app.get('/products/:productId/reviews',async(req,res) => {
// try {
//   const {productId} = req.params;
//   const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)
//   res.json(JSON.parse(response))
// } catch (e) {
//   res.json(e)
// }
// })
// app.get('/products/:productId/offers',async(req,res) => {
// try {
//   const {productId} = req.params;
//   const response = await request(`${baseUrl}&url=https://www.amazon.com/offer-listing/${productId}`)
//   res.json(JSON.parse(response))
// } catch (e) {
//   res.json(e)
// }
// })
