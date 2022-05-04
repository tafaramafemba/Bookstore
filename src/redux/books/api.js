const urlBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Eb5jSUPKqrnj1kiZxQDL/books';

export const fetchBook = async () => {
  const books = [];
  try {
    const res = await fetch(
      urlBooks,
    );
    const data = await res.json();
    Object.entries(data).forEach((book) => books.push({ ...book[1][0], item_id: book[0] }));
    return books;
  } catch (err) {
    return err;
  }
};

export const createBook = async (book) => {
  try {
    await fetch(
      urlBooks, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );
    return book;
  } catch (err) {
    return err;
  }
};


export const removeBook = async (id) => {
  try {
    const res = await fetch(
      `${urlBooks}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: id }),
      },
    );

  } catch (err) {
    return err;
  }
  return false;
};