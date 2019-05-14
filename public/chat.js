var socket = io.connect('http://localhost:5000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var send = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


send.addEventListener('click', function(){
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    })
});

message.addEventListener('keypress', function(){
    socket.emit('feed', handle.value);
});

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    console.log(data);
});

socket.on('feed', function(){
    feedback.innerHTML = '<em>' + data + '</em>' + 'is typing...';
});