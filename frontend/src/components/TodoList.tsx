import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { filteredTodos, toggleTodo, removeTodo } = useTodoContext();

  if (filteredTodos.length === 0) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;