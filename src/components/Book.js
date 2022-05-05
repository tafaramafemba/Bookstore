import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { lessBooks } from '../redux/books/books';
import { showBooks } from '../redux/books/books';
import { useEffect } from 'react';
import '../Book.css';


function DisplayBook() {
  const state = useSelector(state => state.books);
  const dispatch = useDispatch();
  console.log(state)

  useEffect(() => {
    dispatch(showBooks());
  }, []);

  return (
    <div className='bookcontainer'>
      <ul className='ul-book'>
      {state.map(book => (
        
        <li className='bookitem' key={book.item_id}><p className='category'>Action</p>{book.title}<p className='authorStyle'>{book.author}</p>
        <div className='links_below'>
          <button className='comments'>comments</button>
        <button onClick={() => dispatch(lessBooks(book.item_id))} type="button" className='btn'>Remove</button>
        <button className='edit'>edit</button>
        </div>
        {/* <div className='read_status'>
          <p className='current_chap'>CURRENT CHAPTER</p>
          <p className='chapter_num'>Chapter 18</p>
          <button className='update'></button>
        </div> */}
        </li>
        
      ))}
    </ul>
    </div>
  )
}

export default DisplayBook;