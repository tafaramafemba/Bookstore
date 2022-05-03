import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'BOOK_ADDED';
const REMOVE_BOOK = 'BOOK_REMOVED';

export function moreBooks(book){
  const id = uuidv4();
  return {
    type: ADD_BOOK,
    data: { ...book, id },
  }
}

export function lessBooks(id){
  return {
    type: REMOVE_BOOK,
    id,
  }
}

const initialState = [
  { id: uuidv4(), title: 'Title', author: 'Tafara' },
  { id: uuidv4(), title: 'Chronicles of Tino', author: 'Tino'}
]

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.data]

    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    default: return state
  }

}