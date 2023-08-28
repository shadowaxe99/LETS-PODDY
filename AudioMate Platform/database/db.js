const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/audiomate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;