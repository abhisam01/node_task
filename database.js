const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURI = process.env.mongoURL_local
const mongoURI = process.env.mongoURL;

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('mongoDb is connected');
});

module.exports = db;
