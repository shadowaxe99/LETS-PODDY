# AudioMate Platform Database

This folder contains the necessary files for setting up and managing the database for the AudioMate Platform.

## db.js


const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/audiomate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;


The `db.js` file is responsible for establishing a connection to the MongoDB database using Mongoose. It connects to the `audiomate` database on the local MongoDB server. Once the connection is established, it logs a success message to the console.

## README.md

This file provides an overview of the database folder and its contents.

Please note that the actual implementation of the database models and schemas will be present in the `models` folder under the `server` directory.