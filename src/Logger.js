
const EventEmitter = require('events')

export class Logger extends EventEmitter{

    showNewConnection(){
        let connectionID=0
        this.emit('connection',{
            id: connectionID++
        })
    }
}
