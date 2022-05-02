import bookReducer from './books'
import statusReducer from './categories'


export const rootReducer = Redux.combineReducers({
  bookReducer,
  statusReducer
});

export const store = Redux.createStore(rootReducer);