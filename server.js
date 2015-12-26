// server.js (Express 4.0)
var express        = require('express');
var app            = express();

app.use(express.static(__dirname + '/app')); 	// set the static files location /public/img will be /img for users

app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
