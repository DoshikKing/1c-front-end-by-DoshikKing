var express = require("express")
    cors = require("cors")
var app = express();

var fs = require ("fs");

app.use(cors());

function getRandom()
{
    //var d = new Date();
    //return d.getMilliseconds();
    return Math.round(Math.random() * 100);
}

var result = "";
var title = "";

app.get("/qoute", function (request, response) {
//    result = "";
//    title = "";
    
    fs.readFile("database.txt", "utf-8", function (err, content) {
        if (err) {
            console.log(err)
        } else {
            var list = content.split("\x0D\x0A");
            var rnd = Math.round((getRandom() * list.length) / 100);
            result = list[rnd];
            title = "Цитата" + rnd;
        };
    
//        result += " [" + rnd + "]";
    });

    var output = "<script>document.title = \"" + title + "\"</script>" +
                "<div class=\"alert alert-success\" id = \"sandbox\">" + result + "</div>";
    response.send(output);

});

app.listen(255);