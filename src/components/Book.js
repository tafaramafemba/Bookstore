import React from "react";
import PropTypes from 'prop-types';

class DisplayBook extends React.Component {
  render(){
    const { books } = this.props;
    return(
      <div>
      <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}{book.author}
        <button>Remove</button>
        </li>
      ))}
    </ul>
    </div>
    )
  }
}

DisplayBook.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayBook;