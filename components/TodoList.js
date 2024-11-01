import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../atoms/todosState';
import { fetchTodosApi } from '../api/api';

const TodoList = ({ setCurrentTodo }) => {
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await fetchTodosApi();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [setTodos]);

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
