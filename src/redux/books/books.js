import { v4 as uuidv4 } from 'uuid';
import { fetchBook, createBook, removeBook } from './api';
const GET_BOOK = 'BOOKS_DISPLAYED';
const ADD_BOOK = 'BOOK_ADDED';
const REMOVE_BOOK = 'BOOK_REMOVED';

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case GET_BOOK: return [...state, action.payload]
    case ADD_BOOK: return [...state, action.payload]

    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    default: return state
  }

}

export const showBooks = () => async (dispatch) => {
  let books;
  try {
    books = await fetchBook();
    dispatch({
      type: GET_BOOK,
      payload: books,
    });
  } catch (err) {
    return err;
  }
  return books;
};

export const moreBooks = (book) => async (dispatch) => {
  try {
    const newBook = await createBook({ ...book, item_id: uuidv4() });
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const lessBooks = (id) => async (dispatch) => {
  try {
    await removeBook(id);
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
    return true;
  } catch (err) {
    return err;
  }
};