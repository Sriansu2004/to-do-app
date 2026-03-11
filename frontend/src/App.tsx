import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterBar from './components/FilterBar';
import './styles/App.css';

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <div className="container">
          <TodoForm />
          <FilterBar />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;