'use strict'

const Book = function (title, author) {
    this.title = title
    this.author = author
    this.isRead = false //adugam cimp nou 'this.isRead' cu valoare implicita 'false'
}

Book.prototype.read = function () { //adugam metoda 'read()' in prototypul obiectuluyi nostru
    this.isRead = true
    //metoda 'read' schimba valoarea cimpul 'this.isRead' in 'true' 
    this.title = this.title.toUpperCase()
    //eu mam jucat, schimb denumirea cartsii in litere majuskule 
}
Book.prototype.cover = 'Paper' //adugam in prototype un cimp nou 'cover' cu valoarea'Papper'

const lordOfTheRing = new Book('Lord of The Ring', 'Tolkien')
lordOfTheRing.read() //chemam metoda 'read()'

console.log(lordOfTheRing)
console.log(lordOfTheRing.cover) //afisham valoarea cimpului 'cover'
console.log(lordOfTheRing.hasOwnProperty('cover')) //false
//controlam daca 'lordOfTheRing' are proprietatea 'cover'
console.log(lordOfTheRing.hasOwnProperty('author')) //true
//controlam daca 'lordOfTheRing' are proprietatea 'author'
console.log(Book.prototype.hasOwnProperty('cover')) //true


console.log(lordOfTheRing.__proto__) //afisham ce se contine in prototypul
console.log(lordOfTheRing.__proto__ === Book.prototype) //true
//controlam daaca coinceide '__proto__' cu protopiul nostru creat 'Book.prototype'

console.log(Book.prototype.isPrototypeOf(lordOfTheRing)) //true
//contralam daca 'Book.prototype' este prototip pentru 'lordOfTheRing'
console.log(Book.prototype.isPrototypeOf(Book)) //false
//pentru obiectul 'Book' nu este prototype


