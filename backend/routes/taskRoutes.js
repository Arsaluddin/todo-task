const express = require('express');
const router = express.Router();

// Sample data store (tasks stored in memory)
const tasks = [];

// Route to get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Route to add a new task
router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Task title cannot be empty' });
  }

  const newTask = { id: Date.now().toString(), title, completed: false };
  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Route to update a task's completion status
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const taskToUpdate = tasks.find((task) => task.id === id);

  if (!taskToUpdate) {
    return res.status(404).json({ error: 'Task not found' });
  }

  taskToUpdate.completed = completed;

  res.json(taskToUpdate);
});

// Route to delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const indexToRemove = tasks.findIndex((task) => task.id === id);

  if (indexToRemove === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(indexToRemove, 1);

  res.status(204).end();
});

module.exports = router;
