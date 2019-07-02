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

app.listen(8081);

// 引入Multer
const multer = require('multer')

// 设置保存上传文件路径
const upload = multer({
    dest: './upload'
})

// 处理上传文件
app.use(upload.any())

// 接收文件上传结果
app.post('/upload', (req, res, next) => {
    // console.log(req.body)
    console.log(req.files)
    setTimeout(function () {
        res.send({
            error: 0,
            data: req.body,
            msg: '上传成功',
            downloadUrl: req.files[0].path
        })
    }, 5000)
})

// 静态资源
const path = require('path');
app.use(express.static(path.join(__dirname, '.')))
