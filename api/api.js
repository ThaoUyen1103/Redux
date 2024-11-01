const API_URL = 'https://67242440493fac3cf24d4b13.mockapi.io/todo';

export const fetchTodosApi = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

export const addTodoApi = async (todo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to add todo');
  return response.json();
};

export const updateTodoApi = async (todo) => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
};

export const deleteTodoApi = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  return id; 
};


