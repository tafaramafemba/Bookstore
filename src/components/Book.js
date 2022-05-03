import React from "react";

import { useSelector } from "react-redux";

function DisplayBook() {

  const books = useSelector(state => state.books)
  console.log(this.state.first)

    return(
      <div>
      {/* <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}{book.author}
        <button>Remove</button>
        </li>
      ))}
    </ul> */}
    </div>
    )
  }

export default DisplayBook;