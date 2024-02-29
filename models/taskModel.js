const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  task: {
    type: String,

    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  dueDate: {
    type: Date,
  },
});

const taskList = model('TaskList', taskSchema);

module.exports = taskList;
