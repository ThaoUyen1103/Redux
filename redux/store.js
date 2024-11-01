import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todosReducer from './todoSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { todos: todosReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
