'use strict'

const Book = function (title, author) {
    this.title = title
    this.author = author
    this.isRead = false //adugam cimp nou 'this.isRead' cu valoare implicita 'false'
}

Book.prototype.read = function () { //adugam metoda 'read()' in prototypul obiectuluyi nostru
    this.isRead = true
}

//Totul mai sus se face mai ushor cu clasele
//Cel mai CORECT de folosit CLASELE!!!
//Exemplu

class BookClass {
    isRead = false //proprietate a clasei

    constructor(title, author) {
        this.title = title
        this.author = author
    } //metoda rezervata de clasa

    read() { //adaugam metoda read()
        this.isRead = true
    }
}

//creeam o carte noua cu ajutorul clasei 'BookClass'
const tarzanBook = new BookClass('Tarzan', 'Edgar Rice')
console.log(tarzanBook) //afisham cartea creata 'tarzanBook'
console.log(tarzanBook.__proto__) //afisham prototipul cartsii 'tarzanBook'
console.log(tarzanBook instanceof BookClass) //true //Controlam daca aprtsine clasei 'BookClass'
tarzanBook.read() //accesam metoda 'read()' din clasa 'BookClass'

