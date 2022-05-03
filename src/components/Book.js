import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { lessBooks } from '../redux/books/books';

function DisplayBook() {
  const state = useSelector(state => state.booksReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
      {state.map(book => (
        <li key={book.id}>{book.title}{book.author}
        <button onClick={() => dispatch(lessBooks(book.id))} type="button">Remove</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default DisplayBook;