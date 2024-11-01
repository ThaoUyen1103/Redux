import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { fetchTodos } from './redux/todoSlice';

const App = () => {
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    store.dispatch(fetchTodos());
  }, []);

  return (
    <Provider store={store}>
      <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      <TodoList setCurrentTodo={setCurrentTodo} />
    </Provider>
  );
};

export default App;
