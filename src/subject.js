class Subject {
    constructor(name,level, hours, book, quote) {
        this.name = name;
        this.level = level;
        this.hours = hours;
        this.book = book;
        this.quote = quote;
        this.books = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setLevel(level) {
        this.level = level;
    }

    getLevel() {
        return this.level

    }
    setHours(hours) {
        this.hours = hours;
    }

    getHours() {
        return this.hours
    }

    setBook(book) {
        this.book = book;
    }

    addBook(book) {
        this.books.push(book);
    }

    getBook() {
        return this.books;
    }

    setQuote(quote) {
        this.quote = quote;
    }

    getQuote() {
        return this.quote
    }
}