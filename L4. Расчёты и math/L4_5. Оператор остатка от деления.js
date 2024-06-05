'use strict'

console.log(15 / 2) //7.5
console.log(15 % 2) //restul e 1
console.log(14 % 2) //0

//exemplu de utilizare operatorului de rest '%'

const isEven = n => n % 2 === 0
//strelocinaia funtcia de control daca numarul este Par

//functie clasika dac anumarul este Par
function isEvenF(n) {
    return n % 2 === 0
}

console.log(isEven(17)) //false
console.log(isEven(16)) //true

console.log(isEvenF(17)) //false
console.log(isEvenF(16)) //true

//analog cu Impar
const isOdd = n => n % 2 === 1

console.log(isOdd(17)) //true
console.log(isOdd(16)) //false