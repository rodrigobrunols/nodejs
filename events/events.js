var events = require("events")

var eventEmitter = new events.EventEmitter()

var connHandler = function connected() {
    console.log('Sucessfully Connected !')

    eventEmitter.emit('data_received')
}

eventEmitter.on('connection' , connHandler)

eventEmitter.on('data_received' , () => {
    console.log('received!')
});

eventEmitter.emit('connection')

console.log('program ended')