# EReader Demo
A simple EReader that can be interacted with through the console when the HTML
file is open. Interactions can be made by calling the following methods on the
**eReaderUI** variable in the console. Any error or status messages will be displayed
on the console.

## EReader State Editing
### open(index)
* **index**: An index of a book within the EReader's library
Opens the book at the specified **index**, displaying it's contents on the HTML page.

### close()
Closes the currently opened book if any.

## Library Editing
### add(book)
* **book**: An Book object *(Please refer to the Book.js file for reference)*
Adds the given **book** to the library

### remove(index)
* **index**: An index of a book within the EReader's library
Given the **index** of a book in the EReader's library, attempts to remove 
the book from the library

