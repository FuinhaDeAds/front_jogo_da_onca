const Koa = require('Koa');
const http = require('http');
const socket = require('socket.io');

const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server);

const SERVER_HOST = 'localhost';
const SERVER_PORT = 8080;

io.on('connection', socket => {
    console.log('[IO] Connection => Server has a new connection')
    
    socket.on('game.start', data => {
        console.log('[SOCKET] Game.start => ', data)
        // io.emit('chat.message', data)
    })

    socket.on('game.moverPeca', data => {
        console.log('[SOCKET] Game.moverPeca => ', data)
        // io.emit('chat.message', data)
    })

    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect => A connection was disconnected')
    })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
    console.log('[HTTP] Listen => Press CTRL+C to stop it');
});