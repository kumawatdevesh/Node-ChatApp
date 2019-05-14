var express = require('express');
var socket = require('socket.io');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(5000, function(){
    console.log('Hello World');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
    console.log('connection made', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('feed', function(data){
        socket.broadcast.emit('feed', data);
    });
});

