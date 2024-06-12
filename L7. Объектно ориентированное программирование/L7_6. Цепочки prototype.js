'use strict'

const Book = function (title, author) {
    this.title = title
    this.author = author
}

const lordOfTheRing = new Book('1', '1')
/**Procesul de creeare cu 'new'(pot capotam):
 * 1. Creem un obiect gol 'lordOfTheRing'
 * 
 * 2. Se cheama contructurul si se atribuie:
 * lordOfTheRing
 * this.authoor
 * this.title
 * 
 * 3. Se petrece lagatura cu prototypyl -__proto__ -->Book.Prototype
 * Apere proprietatea __proto__
 * lordOfTheRing
 * this.authoor
 * this.title
 * 
 * 4.Ultimul pas ne intoarce Obiectul care are silka la prototipul lui
 * 
 */

console.log(Book.prototype.__proto__)//primim prototipul de obiect
// Book.Prototype-->Object.Prototype
console.log(Object.prototype.__proto__) //null
// Object.Prototype ---> null
// Aici lantsul de proptipe se termina!!!
