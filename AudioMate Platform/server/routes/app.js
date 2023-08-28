const express = require('express');
const audioRoutes = require('./audioRoutes');
const userRoutes = require('./userRoutes');

const app = express();

app.use('/audio', audioRoutes);
app.use('/user', userRoutes);

module.exports = app;