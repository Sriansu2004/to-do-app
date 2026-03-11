import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterBar from './components/FilterBar';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="app">
          <Header />
          <FilterBar />
          <TodoForm />
          <TodoList />
        </div>
      </Router>
    </TodoProvider>
  );
};

export default App;