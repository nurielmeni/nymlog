const express = require('express');
const Log = require('../models/log');
const router = express.Router();

/* GET log message. */
router.get('/', function(req, res, next) {
    res.send("Recieved: " + req);
});
  
/* POST log message. */
router.post('/', function(req, res, next) {
    if (typeof req.body.logs !== 'undefined' && req.body.logs.length > 0) {
        console.log(req.body.logs[0]);
        const log = new Log(req.body.logs[0]);

        log.save((err) => {
            if (err) res.send('Log Errro: no log recieved', err);
        });
        res.send(`Log Recieved: ${JSON.stringify(req.body.logs[0])}`);
    } else {
        res.send('Log Errro: no log recieved');
    }
});
  
module.exports = router;
