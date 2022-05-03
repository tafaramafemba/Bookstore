const ADD_BOOK = 'BOOK_ADDED';
const REMOVE_BOOK = 'BOOK_REMOVED';

export const moreBooks = () => {
  return {
    type: ADD_BOOK,
    book
  }
}

export const lessBooks = () => {
  return {
    type: REMOVE_BOOK
  }
}

const bookReducer = (state = {
  books: [
    {
      id: 1,
      title: "The Brotherhood",
      author: "Tafara Mafemba"
    },
    {
      id: 2,
      title: "Raising Dion",
      author: "Tom Ford"
    },
    {
      id: 3,
      title: "The Master Builder",
      author: "Harry Styles"
    },
  ]

}, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.book];

    case REMOVE_BOOK: return [...state]
    default: return state
  }

}

export default bookReducer;