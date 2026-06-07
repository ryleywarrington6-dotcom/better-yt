const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    socket.on('join-room', (data) => {
        socket.join(data.room);
    });

    socket.on('cursor-move', (data) => {
        socket.to(data.room).emit('user-moved', data);
    });

    socket.on('cursor-click', (data) => {
        socket.to(data.room).emit('user-clicked', data);
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Sync network server responding on port ${PORT}`));
