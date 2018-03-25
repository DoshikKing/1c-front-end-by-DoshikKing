
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("../client"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var database;

app.get("/books", urlencodedParser, function (request, response) {
    var books = database.collection("books");

    books.find({ year: {$gte: 1970, $lte: 2000}}).toArray(function (err, all_books) {
        var buffer = "<table><tr><th>Name</th><th>Year</th></tr>";
        for(var i=0;i < all_books.length; i++)
        {
            buffer += "<tr><td>" + all_books[i].name + "</td><td>" + all_books[i].year + "</td></tr>";
        }
        response.send(buffer + "</table>");  
    });
});

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    database = db.db("libriary");
    console.log(database);
    app.listen(591);
});




