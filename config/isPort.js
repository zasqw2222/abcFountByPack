const net = require('net')

module.exports = (port, callback) => {
    let server = net.createServer().listen(port)

    server.on('listening', function () { // 执行这块代码说明端口未被占用
        server.close() // 关闭服务
        callback && callback(port)
    })

    server.on('error', function (err) {
        if (err.code === 'EADDRINUSE') { // 端口已经被使用
            console.log('The port【' + port + '】 is occupied, please change other port.')
            port += 1
            callback && callback(port)
        }
    })
}