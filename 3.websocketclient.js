var WebSocket=require("ws");
var socket=new WebSocket('ws://localhost:9090');
socket.on('open', function () {
    console.log('连接已经建立！！！');
    socket.send('nihao服务器');
})


socket.on('message', function (data) {
    console.log(data);
})