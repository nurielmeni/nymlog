const www = require("../bin/www");
const express = require("express");
const Log = require("../models/log");
const router = express.Router();

/* GET log message. */
router.get("/", function(req, res, next) {
  res.send("Recieved: " + req);
  res.end();
});

/* POST log message. */
router.post("/", async (req, res, next) => {
  if (typeof req.body.logs !== "undefined" && Array.isArray(req.body.logs)) {
    console.log("logs: ", req.body.logs);
    await req.body.logs.forEach(async logItem => {
      const log = new Log(logItem);
      console.log("Log", log);

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
    });
  } else {
    res.status(400).json({ message: "Log Errro: no log recieved" });
  }
});

module.exports = router;
