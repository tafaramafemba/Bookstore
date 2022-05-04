import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { lessBooks } from '../redux/books/books';
import { showBooks } from '../redux/books/books';
import { useEffect } from 'react';


function DisplayBook() {
  const state = useSelector(state => state.books);
  const dispatch = useDispatch();
  console.log(state)

  useEffect(() => {
    dispatch(showBooks());
  }, []);

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div>
      <ul>
      {state.map(book => (
        <li key={book.item_id}>{book.title}{book.author}
        <button onClick={() => dispatch(lessBooks(book.item_id))} type="button">Remove</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default DisplayBook;