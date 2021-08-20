class Book {
    constructor(name,subject) {
        this.name = name;
        this.subject = subject;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }
}

module.exports = Book;