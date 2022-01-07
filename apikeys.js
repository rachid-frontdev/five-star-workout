const {users} = require('./data.js');
const MAX = process.env.API_MAX || 25;
const generateApiKey = () => {
	//generate a new token
	let crypto = require('crypto');
	crypto.randomBytes(12, (err, buff) => {
		let token = buff.toString('hex');
return token;
	});
};
exports.createUser = (_email, req) => {
  const today = new Date().toISOString().split("T")[0];
  let user = {
    _id:Date.now,
    api_key:generateApiKey(),
    email:_email,
    host:req.headers.origin,
    usage:[{date:today,count:0}]
  }
  console.log('add-user');
  users.push(user);
  return user;
}
exports.validateKey = (req,res,next) => {
  //
  let host = req.headers.origin;
  let api_key = req.query.apiKey;
  let account = users.find((user) => user.host == host && user.api_key == api_key);
  //user object
  if(account) {
    let today = new Date().toISOString().split("T")[0];
    let usageIndex = account.usage.findIndex((day) => day.date == today);
    //already used Today
    if(usageIndex >= 0) {
      if(account.usage[usageIndex].count >= MAX) {
        //stop && respond
        res.status(429).send({
          error:{
            code:429,
            message:"Max api calls exceeded"
          }
        });
      } else {
        // have not hits max usage
        account.usage[usageIndex].count++;
        console.log('Good API call', account.usage[usageIndex]);
        next();
      }
    } else {
			account.usage.push({date:today,count:1});
			next();
		}
  } else {
		res.status(403).send({error:{code:403, message:'you are not allowed.'}})
	}
}
