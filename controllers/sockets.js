
const socketController = (clientSocket) => {

    clientSocket.on('disconnect', () => {

    })

    clientSocket.on('send-msg', (payload, callback) => {

        const id = 123456

        clientSocket.broadcast.emit('send-msg', payload)
        
        callback({id, date: new Date().getTime()});
    })
}

module.exports = {
    socketController
}