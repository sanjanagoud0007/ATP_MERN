/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
*/

class Book {
    title 
    author;
    pages;
    isAvailable=true;
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
    borrow()
    {
        this.isAvailable=false
    }
    returnBook(){
        this.isAvailable=true
    }
    getInfo(){
        return '${this.title} by ${this.author} (${this.pages} pages)';
    }
    isLongBook(){
        if(this.pages>300){
            return true;
        }
        else{
            return false;
        }
}
// 1. Creating at least 5 book objects
let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("1984", "George Orwell", 328);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4 = new Book("The Alchemist", "Paulo Coelho", 208);
let book5 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 336);

// Storing books in an array
let library = [book1, book2, book3, book4, book5];

//2. Perform the following operations:
//1.Display info of all books
console.log("All Books:");
library.forEach(book => {
  console.log(book.getInfo());
});

//2. Borrow 2 books and show availability
book1.borrow();
book3.borrow();

console.log("\nAvailability after borrowing:");
library.forEach(book => {
  console.log(${book.title}: ${book.isAvailable});
});

//3. Return 1 book and show updated status
book1.returnBook();

console.log("\nAvailability after returning one book:");
console.log(${book1.title}: ${book1.isAvailable});

//4. Count long books (pages > 300)
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log(\nNumber of long books: ${longBooksCount});

//5. List all available books
console.log("\nAvailable Books:");
library.filter(book => book.isAvailable)
  .forEach(book => console.log(book.title));
