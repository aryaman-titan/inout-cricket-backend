const routes = require('express').Router();
const Matches = require('./matchData');

const INDEX = '/index.html';

routes.get('/', (req, res) => {
    res.sendFile(INDEX, { root: __dirname });
})

routes.get('/match', (req, res) => {
    res.status(200).json(Matches.listOfMatches);    
})

module.exports = routes;