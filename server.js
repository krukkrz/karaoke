
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/karaoke-client'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/karaoke-client/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



let express2 = require('express')
let app2 = express2();
let http = require('http');
let server = http.Server(app2);
let socketIO = require('socket.io');
let io = socketIO(server);
const port = process.env.PORT || 3000;

var counter = 0;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('vote', (vote) =>{
        console.log('voted: ', vote);
        counter += vote;
        io.emit('vote', counter);
    })

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit('new-message', message);
    });
});


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});