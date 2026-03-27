class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  bookList() {
    console.log("ბიბლიოთეკაში არსებული წიგნები:");
    console.log(this.books);
  }
}

const myLibrary = new Library();
myLibrary.addBook("ვეფხისტყაოსანი");
myLibrary.addBook("დათა თუთაშხია");
myLibrary.bookList();
