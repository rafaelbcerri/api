const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const StocksController = require('../controllers/Stocks');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/stocks', StocksController.getAll);
app.post('/stocks', StocksController.create);

module.exports.handler = serverless(app);