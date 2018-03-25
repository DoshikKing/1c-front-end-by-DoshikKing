
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("../client"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var database;

app.post("/enroll", urlencodedParser, function (request, response) {
});

app.get("/random", urlencodedParser, function (request, response) {
    var lower = parseInt(request.query.lower);
    var upper = parseInt(request.query.upper);
    response.send("[" + getRandom(lower, upper) + "]");  
});

function getRandom(lower, upper)
{
    return (Math.random() * upper) + lower;
}

console.log('started')
app.listen(591);

    


