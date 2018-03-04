var wss = require("ws").Server;

var server = new wss ({ port : 591 });

var clients = new Set();

server.on("connection", function(socket) {
    clients.add(socket);

    socket.on("message", function(message) 
    {
        for(var interlocuter of clients) 
        {
            if (socket != interlocuter) {
                interlocuter.send(message);
            }
        }
        var fs = require ("fs");
        fs.writeFileSync("D:\\My Files\\ProjectsPrgm\\GitHub\\1c-front-end-by-DoshikKing\\homeworks\\3.6.2\\client\\data.html", message);
    });
    
    socket.on("close", function() {
        clients.delete(socket);
    });
});