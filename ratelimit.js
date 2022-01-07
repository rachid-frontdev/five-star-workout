const rateLimit =  require('express-rate-limit');
const standard = {
  hour: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 30 // limit each IP to 30 requests per windowMs
  }),
  day: rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 100
  }),
  week: rateLimit({
    windowMs: 7 * 24 * 60 * 60 * 1000,
    max: 200
  })
}


module.exports = standard.hour;
