const http  = require('http')
const fs = require('fs')
const url = require('url')
// 端口由命令行参数决定
const port = process.argv[2]

if (!port) {
  console.log('都没有参数还玩个毛啊~')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var path = request.url 
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }

  console.log('HTTP 路径为\n' + path)
  if(path == '/style.css'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/main.js'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('alert("这是JS执行的")')
    response.end()
  }else if(path == '/'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>'  + 
      '<head><link rel="stylesheet" href="/style.js">' +
      '</head><body>'  +
      '<h1>你好</h1>' +
      '<script src="/script.html"></script>' +
      '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
