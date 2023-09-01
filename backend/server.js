// Import required modules and packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/taskRoutes'); 
const port = process.env.PORT || 3000; // Set the port

// Middleware
app.use(cors()); // Enable CORS for all routes (you can configure this as needed)
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

// Define your API routes

app.use('/tasks', taskRoutes); // Use the task routes under the /api/tasks path

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
