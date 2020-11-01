var express = require('express');
var app = express();
 
//映射public目录下的静态文件为web路径"/"
app.use('/', express.static('public'));
 
//测试xxx/hello是否正常
app.get('/hello', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8887, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})