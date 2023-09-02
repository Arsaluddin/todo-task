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
    const newTask = { id: Date.now().toString(), title, completed: false };

    // Add the new task to the list of tasks
    setTasks([...tasks, newTask]);

    // TODO: Send a POST request to your backend to add the task
    // Example: createTaskOnServer(newTask);
  };

  // Function to delete a task by ID
  const deleteTask = (taskId) => {
    // Filter out the task with the specified ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Update the list of tasks
    setTasks(updatedTasks);

    // TODO: Send a DELETE request to your backend to delete the task
    // Example: deleteTaskOnServer(taskId);
  };

  // Function to toggle the completion status of a task by ID
  const toggleComplete = (taskId) => {
    // Toggle the completion status of the task
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    // Update the list of tasks
    setTasks(updatedTasks);

    // TODO: Send a PUT request to your backend to update the task's completion status
    // Example: updateTaskCompletionOnServer(taskId, !task.completed);
  };

  // useEffect to fetch tasks from the server when the component mounts
  useEffect(() => {
    // TODO: Fetch tasks from your backend and update the tasks state
    // Example: fetchTasksFromServer().then((data) => setTasks(data));
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
