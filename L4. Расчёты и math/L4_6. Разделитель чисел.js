'use strict'

const bigNum1 = 350100100
const bigNum2 = 350_100_100 //putem si asa scrie


console.log(Number('350_100_100')) //Nan //nu se concerteaza din asa string
console.log(Number('350100100')) //350100100

console.log(Number.parseInt('350_100_100')) //350
console.log(Number.parseFloat('350_100_100.10')) //350
// la fel parseInt si parseFloat nu lucreaza corct

