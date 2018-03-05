
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("../client"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var database;

app.post("/enroll", urlencodedParser, function (request, response) {
    var humans = database.collection("humans");

    var _name = request.body.name;
    var _surname = request.body.surname;

    humans.insert({
        name: _name,
        surname: _surname
    }, function (err, insert) {
        console.log(err);
    });

//    response.send(_name+_surname);  
    response.redirect("/records");
});

app.get("/records", urlencodedParser, function (request, response) {
    var humans = database.collection("humans");

    humans.find().toArray(function (err, all_humans) {
        var buffer = "<table><tr><th>Name</th><th>Surname</th></tr>";
        for(var i=0;i < all_humans.length; i++)
        {
            buffer += "<tr><td>" + all_humans[i].name + "</td><td>" + all_humans[i].surname + "</td></tr>";
        }
        response.send(buffer + "</table>");  
    });
});

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    database = db.db("records");
    console.log(database);
    app.listen(591);
});




