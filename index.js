const express = require('express');
const app = express();
const db = require('./database');
const taskRouter = require('./routes/taskRouter');
const Host = 2020;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

//post api endpoint of tsask list
app.use('/api/task', taskRouter);

//port listening
app.listen(Host, () => {
  console.log(`server is running on port ${Host}`);
});
