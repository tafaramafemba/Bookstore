import '../BookForm.css';
import React from "react";
import { useDispatch } from "react-redux";
import { moreBooks } from "../redux/books/books";

function BookForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(moreBooks({ title, author, category: '' }));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <hr className='hr'></hr>
        <h2 className='addBook'>ADD NEW BOOK</h2>
        <input type="text" id="title" placeholder="Add Title" required />
        <input type="text" id="author" placeholder="Add Author" required />
        <button type="submit" className='submit'>ADD BOOK</button>
      </form>
    </div>
  )
  }


export default BookForm;