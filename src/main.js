

const http = require('http')
import {ConnectionCount} from './ConnectionCount'

let connection = new ConnectionCount()
let server = http.createServer((request , response)=>{
    if (request.url==='/'){
        response.write('hello world'+connection.showCount())
        response.end()
    }
    if (request.url==='/api/courses'){
        response.write(JSON.stringify([1,2,3]))
        response.end()
    }
});
server.on('connection' , ()=>{
    console.log(`new connection id: ${connection.showCount()}`)
})
server.listen(3000 , (args)=>{
    id: 1
})
