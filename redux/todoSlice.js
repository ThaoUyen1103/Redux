import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => { state.push(action.payload); },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
