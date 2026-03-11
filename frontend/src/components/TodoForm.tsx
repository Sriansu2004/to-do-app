import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm: React.FC = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;