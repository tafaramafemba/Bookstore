import bookReducer from '../redux/books/books'
import statusReducer from '../redux/categories/categories'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  bookReducer,
  statusReducer
});

 const store = configureStore({reducer: {rootReducer}});
 export default store;