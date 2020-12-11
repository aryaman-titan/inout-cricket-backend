'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const four = {
  name_of_shot: '4',
  batsman: 'Aryaman',
  bowler: 'Hellix',
  umpire: 'Aviral'
}

const six = {
  name_of_shot: '6',
  batsman: 'Aryaman',
  bowler: 'Hellix',
  umpire: 'Aviral'
}

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(data) {
    console.log(data);
    switch (data) {
      case '4':
        wss.clients.forEach((client) => {
          if (client !== ws ) {
            client.send(JSON.stringify(four));
          }
        })
        break;
      case '6':
        wss.clients.forEach((client) => {
          if (client !== ws ) {
            client.send(JSON.stringify(six));
          }
        })
        break;
      default:
        client.send('No info!');
        break;
    }
  });

  ws.on('close', () => console.log('Client disconnected'));
});
