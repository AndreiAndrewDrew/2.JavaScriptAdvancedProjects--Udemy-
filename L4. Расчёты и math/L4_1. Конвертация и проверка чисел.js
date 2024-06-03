'use strict'

console.log(10 === 10.0) //true

console.log(0.1 + 0.2 === 0.3) //false
console.log(0.1 + 0.2) //0.30000000000000004 

console.log(Number('10')) //10 //consrtatsie din string in numar
console.log(+'20') //la fel; convertam string in number

console.log(Number.parseInt('10', 10)) //identic cu Number('10')
//diferentsa ca la 'parseInt' se indica al 2 parametr in ce sistema
//se converteaza, in exemplu in sistema zecimala

console.log(Number.parseInt('11 sec', 10)) //11
console.log(Number.parseInt('sec 11', 10)) //NaN //deja NU converteaza

console.log(Number.parseInt('11.5', 10)) //11
console.log(Number.parseInt('11.5 sec', 10)) //11
console.log(Number.parseInt('sec 11.5', 10)) //NaN

console.log(Number.parseFloat('11.5', 10)) //11.5
console.log(Number.parseFloat('11.5 sec', 10)) //11.5
console.log(Number.parseFloat('sec 11.5', 10)) //NaN

console.log(Number.isNaN(Number('10sdsfg'))) //true
//adica nu este numar, cu 'isNaN' controlam daca convertatsia a fost facuta cu succes
// NaN - Not a Number 

console.log(Number.isNaN(10 / 0)) //false ->este numar 
console.log(10 / 0) //Infinity -- obtsinem infinit
//avem alt metoda pentru a controla dac anumarul e finit
console.log(Number.isFinite(10 / 0)) //false
console.log(Number.isFinite(10 / 1)) //true

//isFinite - este cel mai comod de lucrat cu cifrele

console.log(Number.isInteger(10)) //true //controlam daca este numar intreg
// isInteger se foloseste rar, si atunci cind ne trebuie sa prindem vreo
//eroare ce e legata de integer


