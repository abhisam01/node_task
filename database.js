const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/tasks';

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('mongoDb is connected');
});

module.exports = db;
