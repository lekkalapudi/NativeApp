importScripts('../lib/socket.io.js');
var myIoSocket = io.connect('http://inenlekkacl2c.corp.emc.com:3000');

myIoSocket.on('send:time', function (data) {
   self.postMessage(data);
});

