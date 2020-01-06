const www = require("../bin/www");
const express = require("express");
const Log = require("../models/log");
const router = express.Router();
const cors = require("cors");
const corsOptions = {
  origin: "https://d.nymedia.co.il",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
/* GET log message. */
router.get("/", function(req, res, next) {
  res.send("Recieved: " + req);
  res.end();
});

/* POST log message. */
router.post("/", cors(corsOptions), async (req, res, next) => {
  if (typeof req.body.logs !== "undefined" && req.body.logs.length > 0) {
    //console.log(req.body.logs[0]);
    const log = new Log(req.body.logs[0]);

    //console.log('Log',log);
    //console.log('UpdateConsole: ', www.updateConsole);

    try {
      const newLog = await log.save();
      //console.log(www.updateConsole());

      www.updateConsole(log);

      //res.send(JSON.stringify(log));
      res.end();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Log Errro: no log recieved" });
  }
});

module.exports = router;
