const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = req.headers['x-access-token'] || req.headers['authorization'] || req.signedCookies['access_token'];
  console.log('Token: ', token);

  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).redirect('/login');

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.get('myprivatekey'));
    req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).redirect('/login');
  }
};