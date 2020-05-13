const http = require("http")

const server = http.createServer((req, res) => {
    console.log('request received')
    console.log(req.headers)
    res.setHeader('Content-type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('ok')
})

server.listen(8088)

// 在终端运行：node server.js
// 在浏览器打开：http://127.0.0.1:8088/