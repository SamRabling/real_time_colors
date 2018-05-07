const express = require("express");
const app = express();
const server = app.listen(4000);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

var color = "gray";

io.on("connection", function (socket) {

    socket.emit('colour', {color: color}); 
    socket.on('button_clicked', function (data) {
        var color = data.color;
        io.emit('colour', {color: color});
    });
});