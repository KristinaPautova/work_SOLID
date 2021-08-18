class Subject {
    constructor(name,level, hours, book, quote) {
        this.name = name;
        this.level = level;
        this.hours = hours;
        this.book = book;
        this.books = [];
        this.quote = quote;
    }

    addBook(book){
        this.books.push(book);
    }

    setName(name) {
        this.name = name;
    }

    setLevel(level){
        this.level = level;
    }

    setHours(hours){
        this.hours = hours;
    }

    setBook(book){
        this.book = book;
    }

    setQuote(quote){
        this.quote =quote;
    }
}