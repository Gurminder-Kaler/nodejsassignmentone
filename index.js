const http = require('http')
const appFileInRoot = require('./app')

const port = process.env.PORT || 8001

const server = http.createServer(appFileInRoot)
console.log('Server Running on port : ', port)
server.listen(port)

