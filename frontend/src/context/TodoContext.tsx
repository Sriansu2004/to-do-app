import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'active';
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: 'all' | 'completed' | 'active' };

interface TodoContextValue {
  state: TodoState;
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'completed' | 'active') => void;
  filteredTodos: Todo[];
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            title: action.payload,
            completed: false,
            createdAt: new Date(),
          },
        ],
      };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((t) => t.id !== action.payload) };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [], filter: 'all' });

  const addTodo = (title: string) => dispatch({ type: 'ADD_TODO', payload: title });
  const removeTodo = (id: string) => dispatch({ type: 'REMOVE_TODO', payload: id });
  const toggleTodo = (id: string) => dispatch({ type: 'TOGGLE_TODO', payload: id });
  const setFilter = (filter: 'all' | 'completed' | 'active') =>
    dispatch({ type: 'SET_FILTER', payload: filter });

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider value={{ state, addTodo, removeTodo, toggleTodo, setFilter, filteredTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodoContext must be used within a TodoProvider');
  return context;
};

export default TodoContext;