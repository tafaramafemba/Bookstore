import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import booksReducer from '../redux/books/books';
import categoriesReducer from '../redux/categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer
});

const initialState = {};

const middleware = [thunk];

export default () => {
  let store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  return {
      store
  }
}