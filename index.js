const express = require('express');
const app = express();
const db = require('./database');
const taskRouter = require('./routes/taskRouter');
require('dotenv').config();
const PORT = process.env.PORT || 2030;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

//post api endpoint of tsask list
app.use('/api/task', taskRouter);

//port listening
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
