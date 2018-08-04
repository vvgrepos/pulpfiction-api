const express = require('express');
const app = express();
const router = express.Router();
const index = require('./routes/index');
const mainRoute = require('./routes/route');
app.use('/', index);
app.use('/persons', mainRoute);
module.exports = app;