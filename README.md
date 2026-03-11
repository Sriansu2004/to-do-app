# Advanced To-Do List Application

This project is an advanced to-do list application built with a React frontend and an Express backend. It allows users to manage their tasks efficiently with features such as adding, deleting, and filtering tasks.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built using React and TypeScript. It includes the following components:

- **TodoList**: Renders a list of todo items.
- **TodoItem**: Represents a single todo item with options to mark it as complete or delete it.
- **TodoForm**: Provides a form for adding new todo items.
- **FilterBar**: Allows users to filter todo items based on their status (all, completed, active).
- **Header**: Displays the title of the application.

#### Key Files

- `src/App.tsx`: Main component that sets up the application structure.
- `src/index.tsx`: Entry point for the React application.
- `src/services/api.ts`: Functions for making API calls to the backend.
- `src/hooks/useTodos.ts`: Custom hook for managing todo state.

### Backend

The backend is built using Express and TypeScript. It handles API requests related to todo items.

#### Key Files

- `src/controllers/todoController.ts`: Contains methods for handling CRUD operations on todo items.
- `src/models/Todo.ts`: Defines the schema for todo items using Mongoose.
- `src/routes/todoRoutes.ts`: Sets up the routes for todo-related API endpoints.
- `src/app.ts`: Entry point for the backend application, setting up the server and middleware.

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (for the backend)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

- Users can add new tasks using the form provided.
- Tasks can be marked as complete or deleted.
- Users can filter tasks based on their status.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.