import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import './App.css'; // Import the CSS file

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (title) => {
    // Create a new task object

    if (title.trim() === '' || title.length > 50) {
      alert('Task title should not be empty and should have a reasonable length.');
      return; // Don't proceed with adding the task
    }

    const newTask = { title, completed: false }; // No need to generate an ID here

    // Send a POST request to create the task on the backend
    fetch('https://to-do-task-tx20.onrender.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the front-end state with the newly created task
        setTasks([...tasks, data]);
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  // Function to delete a task by ID
  const deleteTask = (taskId) => {
    // Send a DELETE request to delete the task on the backend
    fetch(`https://to-do-task-tx20.onrender.com/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Filter out the deleted task from the front-end state
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to toggle the completion status of a task by ID
  const toggleComplete = (taskId) => {
    // Find the task by ID
    const taskToUpdate = tasks.find((task) => task.id === taskId);

    // Toggle the completion status
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

    // Send a PUT request to update the task's completion status on the backend
    fetch(`https://to-do-task-tx20.onrender.com/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then(() => {
        // Update the front-end state with the updated task
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? updatedTask : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  // useEffect to fetch tasks from the server when the component mounts
  useEffect(() => {
    // Fetch tasks from the backend
    fetch('https://to-do-task-tx20.onrender.com/tasks') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="main-container">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
