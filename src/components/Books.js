import React from "react";
import BookForm from "./BookForm";
import DisplayBook from "./DisplayBook";

class Books extends React.Component {

  state = {
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

  }

  render() {
    return (
      <div>
        <DisplayBook
        books={this.state.books} />
        <BookForm />
      </div>
    )
  }
}

export default Books;