const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const conectarBaseDatos = require('./config/db');
const config = require('./config/global');
const cors = require('cors');

const platilloRouter = require("./routes/platillo");
const clienteRouter = require("./routes/cliente");
const categoriaRouter = require("./routes/categoria");
const ordenRouter = require("./routes/orden");
const meseroRouter = require("./routes/mesero");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

conectarBaseDatos();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use('/api/platillo', platilloRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/categoria', categoriaRouter);
app.use('/api/orden', ordenRouter);
app.use('/api/mesero', meseroRouter);
 
io.on('connection', (socket) => {
    console.log("Un usuario se ha conectado");

    socket.on('disconnect', () => {
        console.log("Un usuario se ha desconectado");
    });

    socket.on('chat', (msg) => {
        console.log('Mensaje: ' + msg);
        io.emit('chat', msg);
    });
});
 
app.get('/chat', (req, res) => {
    res.sendFile(`${__dirname}/public/chat/chat-global.html`);
});
 
server.listen(config.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
});