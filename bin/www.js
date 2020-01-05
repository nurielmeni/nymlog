#!/usr/bin/env node

/**
 * Module dependencies.
 */
const config = require("config");
const app = require("../app");
const debug = require("debug")("logger:server");
//const http = require("http");
const https = require("https");

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

/**
 * Get port from environment and store in Express.
 */

//const portHttp = normalizePort(process.env.PORT || "3000");
const portHttps = normalizePort(process.env.PORTSSL || "4000");
app.set("port", portHttps);

/**
 * Create HTTP server.
 */

//const serverHttp = http.createServer(app);
const serverHttps = https.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// serverHttp.listen(portHttp);
// serverHttp.on("error", onError);
// serverHttp.on("listening", onListening.bind(serverHttp));

serverHttps.listen(portHttps);
serverHttps.on("error", onError);
serverHttps.on("listening", onListening.bind(serverHttps));

/**
 * Create the websocket object
 */
const allowedOrigins =
  "http://104.248.28.94:* http://104.248.28.94:8080 http://localhost http://localhost:80 http://localhost:* https://104.248.28.94:* https://104.248.28.94:8080 https://localhost https://localhost:80 https://localhost:*";
const io = require("socket.io")(serverHttps, { origins: allowedOrigins });

/**
 * Socket events
 */
io.on("connection", socket => {
  console.log(`[ server.js ] ${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`[ server.js ] ${socket.id} disconnected`);
  });
});

const updateConsole = json => io.emit("updateConsole", json);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(srv) {
  var addr = srv.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

exports.updateConsole = updateConsole;
