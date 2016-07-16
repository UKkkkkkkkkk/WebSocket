var WebServer=require("ws").Server;
var server=new WebServer({port:9090});

server.on('connection',function(ws){
    console.log("客户端已经连接");
    ws.on("message",function(msg){
        console.log(msg);
        ws.send('不好')
    })//监听客户端发送来的消息
    ws.on("close", function () {
        console.log("客户端走了");
    })
})
