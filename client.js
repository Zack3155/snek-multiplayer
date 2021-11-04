const { builtinModules } = require("module");
const net = require('net');
const { stderr, stdin } = require('process');
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  stdin.setEncoding('utf8');
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
  });

  conn.write(`Name: ${NAME}`);

  // //"hard-coded" Move Code
  // setTimeout(() => {
  //   conn.write("Move: up");
  //   setInterval(() => { conn.write("Move: right") }, 50);
  // }, 1000);

  return conn;
};

module.exports = { connect };
