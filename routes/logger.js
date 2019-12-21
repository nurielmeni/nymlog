const express = require('express');
const Log = require('../models/log');
const router = express.Router();
const io = require('../bin/www');

const updateConsole = html => io.emit('update console', html);

/* GET log message. */
router.get('/', function(req, res, next) {
    res.send("Recieved: " + req);
    res.end();
});
  
/* POST log message. */
router.post('/', async (req, res, next) => {
    if (typeof req.body.logs !== 'undefined' && req.body.logs.length > 0) {
        console.log(req.body.logs[0]);
        const log = new Log(req.body.logs[0]);
        console.log('Log',log);
        try {
            const newLog = await log.save();
            console.log(updateConsole);

            updateConsole('<p>Testwith module</p>');

            res.send(JSON.stringify(newLog));
            res.end();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } else {
        res.status(400).json({ message: 'Log Errro: no log recieved'});
    }
});
  
module.exports = router;
