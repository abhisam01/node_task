const express = require('express');
const router = express.Router();
const taskModels = require('../models/taskModel');

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newtask = new taskModels(data);
    const response = await newtask.save();

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(`internal server error ${error}`);
  }
});

router.get('/', async (req, res) => {
  const data = await taskModels.find();
  res.status(200).json(data);
});

router.get('/:priorityType', async (req, res) => {
  const priorityType = req.params.priorityType;
  if (
    priorityType === 'Low' ||
    priorityType === 'Medium' ||
    priorityType === 'High'
  ) {
    const data = await taskModels.find({ priority: priorityType });
    res.status(200).json(data);
  }
});

router.put('/:id', async (req, res) => {
  const dataBuId = req.params.id;
  const updateData = req.body;

  const updateId = await taskModels.findByIdAndUpdate(dataBuId, updateData, {
    new: true,
  });

  res.status(200).json(updateId);
});

router.delete('/:id', async (req, res) => {
  const data = req.params.id;
  const dataToDelete = await taskModels.findByIdAndDelete(data);
  res.status(200).json(dataToDelete);
});

module.exports = router;
