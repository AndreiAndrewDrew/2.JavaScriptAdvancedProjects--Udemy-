'use strict'
// Moshtenirea 

//Creem cartea
const Book = function (title, author) {
    this.title = title
    this.author = author
}

Book.prototype.buy = function () {
    console.log('Buy')
}

//acuma ne inchipuim ca trebuie sa creem AudioCarte
const AudioBook = function (title, author, lenMin) {
    // this.title = title
    // this.author = author
    Book.call(this, title, author) //legam 'AudioBook' de clasa 'Book'
    this.lenMin = lenMin
}

AudioBook.prototype = Object.create(Book.prototype)
AudioBook.prototype.constructor = AudioBook

AudioBook.prototype.timeBook = function () {
    console.log(`${this.title} - ${this.lenMin}`)
}

const book1 = new AudioBook('Tarzan', 'Tolkin', 1200)
book1.timeBook() //Tarzan - 120
book1.buy() //ypeError: book1.buy is not a function
//ne da eroare ca nu avem access la prototypul lui Book
// trebuie de scris mai sus
//'AudioBook.prototype = Object.create(Book.prototype)'
//Legam prototipurile!!!
console.log(book1)
console.log(AudioBook.prototype.constructor)
//Afisham Constructorul lui 'AudioBook'
console.log(book1 instanceof AudioBook) //true
//Am controlat daca exemplearul 'book1' apartine lui 'Book'
console.log(book1 instanceof Book) //true 
//Am controlat daca exemplearul 'book1' apartine lui 'Book'
//A fost realizata Moshetnirea
//AudioBook se mosteniste din Book
