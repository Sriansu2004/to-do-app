import { Router } from 'express';
import TodoController from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodoById);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

export default function setTodoRoutes(app) {
    app.use('/api', router);
}