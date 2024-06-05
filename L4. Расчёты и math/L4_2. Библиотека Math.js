'use strict'

console.log(Math.sqrt(36)) //6 radacina de gradul 2, patrata
console.log(36 ** (1 / 2)) //6 //analog la 'sqrt'
console.log(Math.cbrt(27)) //3 radacina de gradul 3, cubica
console.log(27 ** (1 / 3)) //3 //analog la 'cbrt'

console.log(Math.sign(-100)) // -1 //ne intorce semnul cifrei
console.log(Math.sign(345)) // 1

console.log(Math.abs(-100)) //modul

console.log(Math.max(-3, 2, 4, -3, 7, 9)) //9
console.log(Math.max(-3, 2, '4', true, 7, '9')) //9 max-converteaza automat
console.log(Math.max(-3, 2, '4', true, 7, '9s')) //NaN -daca un element na sal poata converta, atunci NaN 
console.log(Math.max(-3, 2, '4', true, 7, 1.4)) //7
// la fel cu metaoda min

//Exemplu cu arr
const arr = [-3, 2, 4, -3, 7, 9]
console.log(Math.max(arr)) //NaN-trebuie de adaugat spread operator
console.log(Math.max(...arr)) //9

console.log(Math.random()) //genereaza cifre de la [0 pin la 1]



