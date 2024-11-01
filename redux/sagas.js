import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchTodosApi, addTodoApi, updateTodoApi, deleteTodoApi } from '../api';
import { setTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';

function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put(setTodos(todos));
  } catch (error) {
    console.error(error);
  }
}

function* addTodoSaga(action) {
  try {
    const newTodo = yield call(addTodoApi, action.payload);
    yield put(addTodo(newTodo));
  } catch (error) {
    console.error(error);
  }
}

function* updateTodoSaga(action) {
  try {
    const updatedTodo = yield call(updateTodoApi, action.payload);
    yield put(updateTodo(updatedTodo));
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(deleteTodoApi, action.payload);
    yield put(deleteTodo(action.payload));
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeEvery('todos/fetchTodosRequest', fetchTodosSaga);
  yield takeEvery('todos/addTodoRequest', addTodoSaga);
  yield takeEvery('todos/updateTodoRequest', updateTodoSaga);
  yield takeEvery('todos/deleteTodoRequest', deleteTodoSaga);
}
