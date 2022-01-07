const slowDown = require("express-slow-down");

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500
});
module.exports = speedLimiter;
