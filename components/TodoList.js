import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

const TodoList = ({ setCurrentTodo }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => setCurrentTodo(todo)}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
