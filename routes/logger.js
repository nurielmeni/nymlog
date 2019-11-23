const express = require('express');
const Log = require('../models/log');
const router = express.Router();

/* GET log message. */
router.get('/', function(req, res, next) {
    res.send("Recieved: " + req);
});
  
/* POST log message. */
router.post('/', async (req, res, next) => {
    if (typeof req.body.logs !== 'undefined' && req.body.logs.length > 0) {
        console.log(req.body.logs[0]);
        const log = new Log(req.body.logs[0]);
        console.log('Log',log);
        try {
            const newLog = await log.save();
            res.status(201).json(newLog);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } else {
        res.status(400).json({ message: 'Log Errro: no log recieved'});
    }
});
  
module.exports = router;
