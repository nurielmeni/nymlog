var express = require('express');
var router = express.Router();

/* GET log message. */
router.get('/', function(req, res, next) {
    res.send("Recieved: " + req);
});
  
/* POST log message. */
router.post('/', function(req, res, next) {
    if (typeof req.body.logs !== 'undefined' && req.body.logs.length > 0) {
        console.log(req.body.logs[0]);
        res.send(`Log Recieved: ${req.body.logs[0]}`);
    } else {
        res.send('Log Errro: no log recieved');
    }
});
  
module.exports = router;
