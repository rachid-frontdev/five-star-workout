const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const workoutRoutes = require('./routes/workout-routes.js');
require('dotenv/config');
const baseUrl = `http://api.scraperapi.com?api_key=${process.env.API_KEY}&autoparse=true`;
// custom module
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen('4000', () => {
  console.log("connected to API");
})
app.use(workoutRoutes);


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
