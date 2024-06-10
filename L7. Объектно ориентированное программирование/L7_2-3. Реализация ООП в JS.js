'use strict'

const a = [1]
console.dir(a)
//'dir()' afisheaza toata informaysia despre obiect

const User = function (email, pass) {
    this.email = email
    this.pass = pass
}

const user1 = new User('a@.com', '123')
//new User-creem un obiect gol, se cheama functia 
//'function (email, pass)'este constructor
console.log(user1)
const user2 = new User('a2@.com', '2123')
console.log(user2)

console.log(user1 instanceof User) //true
//controlam daca 'user1' apartine obiectului 'User'

//Pashii de creeare a obiectului:

/**
 * 1. Se creeaza un obiect gol
 * 2. se cheama functaie 'function (email, pass)'
 * 'this' = obiectul gol al nostru
 * 3.Obiectul se leaga cu prototipul
 * 4.se intorce obiect nou dataorita l aoperatorul 'new'
 */

