'use strict'

const date1 = new Date(1986, 10, 20)
const date2 = new Date(2024, 5, 7)

console.log(date1 > date2) //false
console.log(date1 < date2) //true

console.log(date1.getTime() < date2.getTime()) //true

//Exemple de egali si aechivalente
const date3 = new Date(2024, 5, 7)
const date4 = new Date(2024, 5, 7)
console.log(date3 == date4) //false //ca exempleare nu snut egale 
console.log(date3 === date4) //false

console.log(date3.getTime() == date4.getTime()) //true //ca timestemp-uri sunt egale
console.log(date3.getTime() === date4.getTime()) //true //si echivalente

console.log(Number(date3) === Number(date4)) //true
console.log(+date3 === +date4) //true //'+' analog la 'Number()'