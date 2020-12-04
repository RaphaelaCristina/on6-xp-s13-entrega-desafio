const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository')
database.connect()

const games = require('./routers/games-routers')

app.use(cors());
app.use(express.json());
app.use('/', games);

module.exports = app;


