'use strict'

console.log(Math.round(1.4)) //1
console.log(Math.round(1.5)) //2
console.log(Math.round(1.499999)) //1

console.log(Math.ceil(1.4))//2 
console.log(Math.ceil(1.1))//2
console.log(Math.ceil(0.1))//1
//'ceil'-rotunjeste la valoare de sus

console.log(Math.floor(1.4))//1
console.log(Math.floor(1.1))//1
console.log(Math.floor(0.1))//0
//'floor' este opus lui 'ceil'

console.log(Math.trunc(3.4))//3
console.log(Math.trunc(2.1))//3
console.log(Math.trunc(0.1))//0
//'trunc' - trunchiaza pina la numar intreg

console.log((1.499999).toFixed(1)) // primim string 5 //rotunjeset pin la 1 cifra dupa virgula
console.log((1.499999).toFixed(3)) //tot string 1.500 // pina la 3
//metoda 'toFixed()' converteaza in string

console.log(Number(1.499999).toFixed(3)) //primi numar 1.500 //convertam inapoi in numar

