'use strict'

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    info() {
        console.log(`${this.title} - ${this.author}`)
    }
}

const book1 = new Book('Tarzan', 'Tolkin')
book1.info()

class EBook extends Book {
    constructor(title, author, pages) {
        super(title, author)
        this.pages = pages
    }

    info() { //Override metoda
        console.log(`${this.title} - ${this.author} - ${this.pages}`)
    }
}

const book2 = new EBook('Tarzan', 'Tolkin', 100)
book2.info()
