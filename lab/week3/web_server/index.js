// Use the Express package.
const express = require("express");

const app = express();

// Allows Express to use the http module of Node.
const http = require("http").Server(app);

// Tells Express/http what port to listen to.
http.listen(3000);

console.log("Express is running on port 3000.")