import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';
import { deleteTodoApi } from '../api'; // Đảm bảo import đúng hàm API

const TodoList = ({ setCurrentTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = async (id) => {
    try {
      await deleteTodoApi(id); // Gọi hàm API để xóa
      dispatch(deleteTodo(id)); // Gọi action để xóa todo từ Redux state
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => setCurrentTodo(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
