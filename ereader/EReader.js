// EReader Class
class EReader {
    constructor(books = []) {
        this.library = [...books];
        this.currentBook = null;
    }

    // EReader Getters
    // Returns title of current book if any
    get currentTitle() {
        if (this.currentBook !== null) {
            return this.library[this.currentBook].title;
        } else {
            console.log("Please open book before continuing");
        }
    }

    // Returns author of current book if any
    get currentAuthor() {
        if (this.currentBook !== null) {
            return this.library[this.currentBook].author;
        } else {
            console.log("Please open book before continuing");
        }
    }

    // Returns author of current book if any
    get currentContents() {
        if (this.currentBook !== null) {
            return this.library[this.currentBook].contents;
        } else {
            console.log("Please open book before continuing");
        }
    }

    // EReader State Methods
    // Give the index of a book in the library, attempts to open a book
    // at the given index
    openBook(index) {
        if (index < 0 || index >= this.library.length) {
            console.log("Please provide a valid index in the EReader's library");
            return;
        }

        this.currentBook = index;
    }

    // Closes the current book
    closeBook() {
        if (this.currentBook === null) {
            console.log("There is no book currently open");
        }
        this.currentBook = null;
    }

    // Library Methods
    // Given a book, attempts to add the book to the EReader's library
    addBook(book) {
        if (!(book instanceof "Book")) {
            console.log("Please add a Book object");
            return;
        }
        this.library.push(book);
    }

    // Given the index of a book in the library, attempts to remove
    // the book at the index from the EReader's library
    removeBook(index) {
        if (index < 0 || index >= this.library.length) {
            console.log("Please provide a valid index in the EReader's library");
            return;
        }
        if (this.currentBook !== null) {
            if (this.currentBook === index) this.closeBook();
        }
        this.library.splice(index, 1);
    }
}

