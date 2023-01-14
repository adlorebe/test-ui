////Install express server
//const express = require('express');
//const path = require('path');
//
//const app = express();
//
//// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));
//
//app.get('/*', function(req,res) {
//
//res.sendFile(path.join(__dirname+'/dist/angular-tour-of-heroes/src/index.html'));
//});
//
//// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
//
//server.listen(port, function () {
//    console.log("App running on port " + port);
//})


const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const server = require('http').Server(app);


// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angular-tour-of-heroes'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/angular-tour-of-heroes/index.html'));
});

// Start the app by listening on the default Heroku port


server.listen(port, function () {
    console.log("App running on port " + port);
})
