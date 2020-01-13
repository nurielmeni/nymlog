#!/usr/bin/env node

/**
 * Module dependencies.
 */
const config = require("config");
const app = require("../app");
const debug = require("debug")("logger:server");
//const http = require("http");
const https = require("https");
const fs = require("fs");

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

/**
 * Get port from environment and store in Express.
 */

//const portHttp = normalizePort(process.env.PORT || "3000");
const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = https.createServer(
  {
    key: fs.readFileSync("nginx/ssl/nginx-selfsigned.key"),
    cert: fs.readFileSync("nginx/ssl/nginx-selfsigned.crt")
  },
  app
);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Create the websocket object
 */
const allowedOrigins =
  "https://logs.nymedia.co.il https://logs.nymedia.co.il:* https://localhost https://localhost:* https://console.nymedia.co.il https://console.nymedia.co.il:*";
const io = require("socket.io")(server, { origins: allowedOrigins });

/**
 * Socket events
 */
io.on("connection", socket => {
  console.log(`[ server.js ] ${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`[ server.js ] ${socket.id} disconnected`);
  });

  socket.on("screenRoom", screen => {
    console.log(`[${socket.id}] join screen room: ${screen}`);
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

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

exports.updateConsole = updateConsole;
