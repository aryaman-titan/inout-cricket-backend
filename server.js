'use strict';

const express = require('express');
const { Server, CLOSING } = require('ws');
const routes = require('./routes');

const Matches = require('./matchData');
// console.log(Matches.four);

const PORT = process.env.PORT || 3000;

const server = express()
  .use('/', routes)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(data) {
    console.log(data);
    switch (data) {
      case '4':
        wss.clients.forEach((client) => {
          // if (client !== ws ) {
            client.send(JSON.stringify(Matches.four));
          // }
        })
        break;
      case '6':
        wss.clients.forEach((client) => {
          // if (client !== ws ) {
            client.send(JSON.stringify(Matches.six));
          // }
        })
        break;
      default:
        client.send('No info!');
        break;
    }
  });


  setInterval(function(){
    ws.ping();
  }, 1000);


  ws.on('close', () => console.log('Client disconnected'));
});
