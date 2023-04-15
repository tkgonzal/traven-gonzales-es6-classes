// Main file for EReader Demo
// File declarations
// EReader
const eReader = new EReader([romeoAndJuliet, theHoundOfTheBaskerVilles]);
// DOM Element Declarations
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const contents = document.querySelector("#contents");

// EReader UI Class
class EReaderUI {
    constructor(titleElem, authorElem, contentElem, reader) {
        this.title = titleElem;
        this.author = authorElem;
        this.contents = contentElem;
        this.reader = reader;
    }

    // Updates the UI
    updateDisplay() {
        // Clear the contents of the display
        for (let element of [this.title, this.author, this.contents]) {
            element.innerHTML = "";
        }

        // If there is an open book, update the display
        if (this.reader.currentBook != null) {
            const titleText = document.createTextNode(this.reader.currentTitle);
            const authorText = document.createTextNode(this.reader.currentAuthor);
            const contentsText = document.createTextNode(this.reader.currentContents);

            this.title.append(titleText);
            this.author.append(authorText);
            this.contents.append(contentsText);
        }
    }

    // Given the index of a book in the eReader's library, 
    // attempts to open the book and update the display
    open(index) {
        this.reader.openBook(index);
        this.updateDisplay();
    }

    // Attempts to close the current book if open
    close() {
        this.reader.closeBook();
        this.updateDisplay();
    }

    // Given the index of a book in the eReader's library, 
    // attempts to remove the book and update the display accordingly
    remove(index) {
        this.reader.removeBook(index);
        this.updateDisplay();
    }

    // Given a book, attemps to add a book to the EReader's library
    add(book) {
        this.reader.addBook(book);
    }
}

// Initialize the app
const eReaderUI = new EReaderUI(title, author, contents, eReader);

