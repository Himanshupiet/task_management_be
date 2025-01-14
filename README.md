
# Task Management System - Backend

This is the backend of the **Task Management System**, built with **Express.js** and **MongoDB**. It provides a RESTful API to perform CRUD operations on tasks.

---

## Features

- **Create Task**: Add a new task with a title, description, and completion status.
- **Read Tasks**: Fetch all tasks from the database.
- **Update Task**: Update the details of an existing task.
- **Delete Task**: Remove a task from the database.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local or cloud-based)

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Himanshupiet/task-management-be.git
   cd task-management-be
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     MONGO_URI=mongodb://localhost:27017/task_manager
     PORT=30100
     ```

4. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint        | Description               |
|--------|-----------------|---------------------------|
| GET    | `/tasks`        | Fetch all tasks.          |
| POST   | `/tasks`        | Create a new task.        |
| PUT    | `/tasks/:id`    | Update a task by ID.      |
| DELETE | `/tasks/:id`    | Delete a task by ID.      |

---

## Usage

### 1. **Fetch All Tasks**
   **GET** `api/tasks`
   - **Response**: Array of tasks.
   ```json
   [
     {
     	status: 200,
     	message: "Get all tasks successfully..",
     	data: {
       "_id": "64fdc4f8f4a3a4000f123456",
       "title": "Sample Task",
       "description": "This is a sample task.",
       "completed": false,
       "createdAt": "2025-01-13T12:34:56.789Z"
       }
     }
   ]
   ```

### 2. **Create a Task**
   **POST** `api/tasks`
   - **Request Body**:
     ```json
     {
       "title": "New Task",
       "description": "Description of the task"
     }
     ```
   - **Response**:
     ```json
     {
     	status: 200,
     	message: "New task added successfully.",
     	data: {
       "_id": "64fdc4f8f4a3a4000f123457",
       "title": "New Task",
       "description": "Description of the task",
       "completed": false,
       "createdAt": "2025-01-13T12:34:56.789Z"
       }
     }
     ```

### 3. **Update a Task**
   **PUT** `api/tasks/:id`
   - **Request Body** (any of the fields can be updated):
     ```json
     {
       "title": "Updated Task Title",
       "description": "Updated Description",
       "completed": true
     }
     ```
   - **Response**:
     ```json
     {
     	status: 200,
     	message: "Task updated successfully",
     	data: {
       "_id": "64fdc4f8f4a3a4000f123457",
       "title": "Updated Task Title",
       "description": "Updated Description",
       "completed": true,
       "createdAt": "2025-01-13T12:34:56.789Z"
       }
     }
     ```

### 4. **Delete a Task**
   **DELETE** `api/tasks/:id`
   - **Response**:
     ```json
     {
       "message": "Task deleted successfully."
     }
     ```
---

## Folder Structure

```
task-management-backend/
├── controller/
│   └── task.js         # Controller for tasks
├── models/
│   └── task.js         # MongoDB schema for tasks
├── routes/
│   └── task.js   	    # Task-related routes
├── .env                # Environment variables
├── server.js           # Main entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```
---

## Built With

- **Express.js**: Backend framework
- **MongoDB**: Database
- **Mongoose**: MongoDB object modeling
- **dotenv**: Environment variable management

---

## Troubleshooting

- **Error: MongoDB connection failed**:
  - Ensure MongoDB is running locally or provide the correct connection string in `.env`.

- **Port already in use**:
  - Stop any process using the specified port or change the `PORT` value in `.env`.
