import { Request, Response } from 'express';
import TodoService from '../services/todoService';

class TodoController {
    async createTodo(req: Request, res: Response) {
        try {
            const todo = await TodoService.create(req.body);
            res.status(201).json(todo);
        } catch (error) {
            res.status(500).json({ message: 'Error creating todo', error });
        }
    }

    async getTodos(req: Request, res: Response) {
        try {
            const todos = await TodoService.getAll();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching todos', error });
        }
    }

    async updateTodo(req: Request, res: Response) {
        try {
            const updatedTodo = await TodoService.update(req.params.id, req.body);
            if (!updatedTodo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(200).json(updatedTodo);
        } catch (error) {
            res.status(500).json({ message: 'Error updating todo', error });
        }
    }

    async deleteTodo(req: Request, res: Response) {
        try {
            const deletedTodo = await TodoService.delete(req.params.id);
            if (!deletedTodo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting todo', error });
        }
    }
}

export default new TodoController();