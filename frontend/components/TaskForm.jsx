import React, { useState } from 'react';
import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return; // Don't add empty tasks
    }

    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      <input
        className="task-input"
        type="text"
        placeholder="Enter task title"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskForm;
