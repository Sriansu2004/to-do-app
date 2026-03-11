import { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../services/api';
import { Todo } from '../types';

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const fetchedTodos = await fetchTodos();
                setTodos(fetchedTodos);
            } catch (err) {
                setError('Failed to fetch todos');
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    const addTodo = async (newTodo: Omit<Todo, 'id'>) => {
        try {
            const createdTodo = await createTodo(newTodo);
            setTodos((prev) => [...prev, createdTodo]);
        } catch (err) {
            setError('Failed to add todo');
        }
    };

    const toggleTodo = async (id: string) => {
        try {
            const updatedTodo = await updateTodo(id);
            setTodos((prev) =>
                prev.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
        } catch (err) {
            setError('Failed to update todo');
        }
    };

    const removeTodo = async (id: string) => {
        try {
            await deleteTodo(id);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (err) {
            setError('Failed to delete todo');
        }
    };

    return { todos, loading, error, addTodo, toggleTodo, removeTodo };
};

export default useTodos;