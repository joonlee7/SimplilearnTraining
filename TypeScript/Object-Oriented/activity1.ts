
class Booklist {
    // instance variables
    private books: string[] = [];
    booklistName: string;
    // static variables
    static totalBookCount = 0;
    static maxBookCount = 10;

    constructor(name: string) {
        this.booklistName = name;
    }

    addBook(book: string) {
        if (this.books.length >= Booklist.maxBookCount) {
            throw new Error("Book list is full");
        } else {
            this.books.push(book);
            Booklist.totalBookCount++;
        }
    }

    displayBook() {
        for (var book of this.books) {
            console.log(book);
        }
    }

    static totalBooks() {
        return Booklist.totalBookCount;
    }

}

var booklist = new Booklist("My Book List");
console.log(`*****${booklist.booklistName}*****`);

booklist.addBook("TypeScript Tutorial");
booklist.addBook("Angular Tutorial");
booklist.addBook("Python Tutorial");
booklist.addBook("Bootstrap Tutorial");
booklist.addBook("C++ Tutorial");
booklist.addBook("MongoDB Tutorial");

console.log(`Max book count is ${Booklist.maxBookCount}`);
console.log(`Total book count is : ${Booklist.totalBooks()}`);
booklist.displayBook();










