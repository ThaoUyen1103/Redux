import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [currentTodo, setCurrentTodo] = useState(null);

  return (
    <RecoilRoot>
      <div style={{ padding: 20 }}>
        <h1>Ứng Dụng To-Do</h1>
        <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
        <TodoList setCurrentTodo={setCurrentTodo} />
      </div>
    </RecoilRoot>
  );
};

export default App;
