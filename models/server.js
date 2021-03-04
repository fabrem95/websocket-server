const express = require('express');
const cors = require('cors');

const { socketController } = require('../controllers/sockets');

class Server {

    constructor() {

        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        //middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //Sockets
        this.sockets();
    }

    //Middlewares
    middlewares(){

        //CORS
        this.app.use(cors())

        //Carpeta Publica
        this.app.use(express.static('public'))
    }

    //Rutas
    routes() {

        // this.app.use('/auth', require('../routes/auth'))
    }

    sockets() {

        this.io.on("connection", socketController)
    }

    //Coneccion a Puerto
    listen() {

        this.server.listen(this.port, () => {

            console.log('Escuchando puerto', this.port);
        })
    }
}

module.exports = Server