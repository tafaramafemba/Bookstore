import React from "react";

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
    };
  }


  render() {

    return (
      <div>
        <form className="form-container">
          <input
            className="b-title"
            type="text"
            placeholder="Book title"
          />
          <input
            className="b-author"
            type="text"
            placeholder="Author"
          />
          <button className="b-submit" type="button">ADD BOOK</button>
        </form>
      </div>

    );
  }
}


export default BookForm;