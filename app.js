// Importaciones de 3ros
const dotenv = require('dotenv').config();;
// Importaciones propias
const Server = require('./models/server');



const server = new Server();

server.listen();