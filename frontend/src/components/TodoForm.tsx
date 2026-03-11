import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button className="todo-button" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;