var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

/*  "/profiles"
 *    GET: finds all profiles
 */
app.get('/profiles', function (req, res) {
    fs.readFile( __dirname + "/" + "profiles.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

/*  "/users"
 *    GET: finds all users
 */
app.get('/users', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});
/*  "/messages"
 *    GET: finds all messages
 */
app.get('/messages', function (req, res) {
    fs.readFile( __dirname + "/" + "messages.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.get('/messages/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "messages.json", 'utf8', function (err, data) {
        messages = JSON.parse( data );
        var messageRes = messages.filter(function( obj ) {
            return obj.id == req.params.id;
        });
        if (messageRes.length >= 0)
            var message = messageRes[0];
        console.log( message );
        res.end( JSON.stringify(message));
    });
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App now running on port", port);
});

// CONTACTS API ROUTES BELOW