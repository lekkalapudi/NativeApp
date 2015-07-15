importScripts('../lib/socket.io.js');
var myIoSocket = io.connect('http://localhost:3000');

myIoSocket.on('send:time', function (data) {
   self.postMessage(data);
});

