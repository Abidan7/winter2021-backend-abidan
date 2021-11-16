// Use the Express package.
const express = require("express");

const app = express(); // The Express package is being used.

// bodyParser is now depricated!
const bodyParser = require("body-parser") // The body-parser package is also used.

// Allows Express to use the http module of Node.
const http = require("http").Server(app);

// These are necessary settings for body-parser, autmoatically detects and converts them to JSON.
app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

// We used this port = 3000 for Git Hub only, in this case!
const port = 3000;

// Tells Express/http what port to listen to.
http.listen(port);

// Common development ports are 8080. 3000 = Node
console.log("Express is running on port " + port + ".");

// Express Routes Allow us to "redirect" a URL filepath to a specific folder.
app.use("/", express.static("public_html/"));

// This .post() method handles any POST requests made by the / test filepath. When a request is made, run the callback function.
app.post("/test", function (request, response) {
    
    // Data from the front-end is located inside of request. body;

    // The following ocde runs when a request is made.
    console.log("The front ends the following: ", request.body);

    let myResponseObject = {
        response: "Heard you loud and clear!"
    };

    // We send a response to the front-end client with a Status Code of 200 (which means OK).
    // Send an JavaScript object (that will be converted into a JSON string) to the front-end. It ends the .post() method, similar to the return keyword.
    response.send(myResponseObject);
});