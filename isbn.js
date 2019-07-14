
// this file is responsible to connect with the site: https://openlibrary.org/dev/docs/api/books
// and return the necessary information

class ISBN {
  constructor() {

  }
// this method getBook will return the book information
  async getBook(isbn) {

    const bookResponse = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`);

    const book = await bookResponse.json();

    return book;
  }
}
