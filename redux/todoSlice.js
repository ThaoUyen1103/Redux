import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodosApi, addTodoApi, updateTodoApi, deleteTodoApi } from '../api';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', fetchTodosApi);
export const addTodo = createAsyncThunk('todos/addTodo', addTodoApi);
export const updateTodo = createAsyncThunk('todos/updateTodo', updateTodoApi);
export const deleteTodo = createAsyncThunk('todos/deleteTodo', deleteTodoApi);

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
      .addCase(addTodo.fulfilled, (state, action) => { state.push(action.payload); })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
