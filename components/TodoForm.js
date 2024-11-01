// components/TodoForm.js
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../atoms/todosState';
import { addTodoApi, updateTodoApi } from '../api/api';

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentTodo) {
      const updatedTodo = await updateTodoApi({ ...currentTodo, title });
      setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    } else {
      const newTodo = await addTodoApi({ title, completed: false });
      setTodos([...todos, newTodo]);
    }
    setTitle('');
    setCurrentTodo(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
