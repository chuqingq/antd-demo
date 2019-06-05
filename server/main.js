var express = require('express');
var expressWs = require('express-ws');

var app = express();
expressWs(app);

app.ws('/', function (ws, req) {
    ws.send('你连接成功了')
    console.log('连接成功')
    ws.on('message', function (msg) {
        // 业务代码
        console.log('recv ', msg)
        ws.send(msg)
    })
})

app.listen(8080);
