# To-Do List Web Application

A simple web application for managing your to-do list. This application allows users to add, view, update, and delete tasks with ease.

## Features

- View existing tasks.
- Add new tasks with titles and checkboxes.
- Mark tasks as complete.
- Delete tasks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the application, ensure you have the following software installed:

- Node.js and npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/todo-list-app.git

2. Navigate to the project directory:

cd todo-list-app

npm install   

## API Endpoints

The back-end provides the following API endpoints:

GET /api/tasks: Get all tasks.

POST /api/tasks: Create a new task.

PUT /api/tasks/:id: Update a task's completion status.

DELETE /api/tasks/:id: Delete a task by ID.
