import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo) {
      dispatch(updateTodo({ ...currentTodo, title }));
    } else {
      dispatch(addTodo({ title, completed: false }));
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
