import React from 'react';
import './TaskList.css'; // Import the CSS file

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="task-list-container">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'task-completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            {task.title}
            <button className="delete-button" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
