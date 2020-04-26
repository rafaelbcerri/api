const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const HistoricalDailyController = require('../controllers/HistoricalDaily');

const app = express();
app.use(cors());
app.use(express.json({limit: '2mb'}));

app.get('/historical/daily', HistoricalDailyController.getAll);
app.post('/historical/daily', HistoricalDailyController.create);

module.exports.handler = serverless(app);