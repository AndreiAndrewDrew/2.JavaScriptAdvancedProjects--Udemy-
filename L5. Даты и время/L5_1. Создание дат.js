'use strict'

const myDateNow = new Date()
console.log(myDateNow)

//exemple de data cu string
console.log(new Date('01-01-2024'))
console.log(new Date('01/01/2024'))
console.log(new Date('2024/01/01'))
console.log(new Date('01 Jan 2024'))
console.log(new Date('01 ian 2024')) //Nu e valida Data
console.log(new Date('Fri Jun 07 2024 09:25:57'))

//exemple de data cu number
console.log(new Date(2024, 5, 7))
// primul anul 2024, 
// al doilea luna-5(!!! luna se incepe de la 0 in JS !!!)
// al treilea-ziua 7
console.log(new Date(2024, 5, 56)) //nu ne da eroare dar adauga zielel si afisheaza luna vitoae
// Fri Jul 26 2024 00:00:00 GMT+0300 (Eastern European Summer Time)
// Astfel putem lucra cu data de exemplu:
console.log(new Date(2024, 5, 7 + 61)) //Wed Aug 07 2024 00:00:00 GMT+0300 (Eastern European Summer Time)
// data de azi + 61 de zile

console.log(new Date(2024, 5, 7, 10, 5, 10))
//Fri Jun 07 2024 10:05:10 GMT+0300 (Eastern European Summer Time)
//putem aduga si ora, minutele si secundele

console.log(new Date(0))
//Thu Jan 01 1970 02:00:00 data de unde ia inceput in JS
console.log(new Date(1 * 24 * 60 * 60 * 1000))
//Fri Jan 02 1970 02:00:00
//asa obtsinem 2 ianuarie de la data de nceput 
console.log(new Date(365 * 24 * 60 * 60 * 1000))
//Fri Jan 01 1971 02:00:00
//365 am adugat un an
console.log(new Date(50 * 365 * 24 * 60 * 60 * 1000))
//Fri Dec 20 2019 02:00:00
//Am adugat 50 de ani(50*365)
console.log(Date.now())
//timeStep data in milesecunde

const dataInit = new Date(0)
console.log(Number(dataInit.getFullYear()))

console.log(Number(myDateNow.getFullYear()) - Number(dataInit.getFullYear()))
//54 //am aflat citi ani o trecut de la inceputl lui JavaScript

console.log(myDateNow.getMonth()) //5 =iunie
console.log(myDateNow.getDate()) //7 - ziua lunei !!!
console.log(myDateNow.getDay()) //5 - ziua saptaminei !!!
console.log(myDateNow.getHours()) //10 - ora
console.log(myDateNow.getMinutes())
console.log(myDateNow.getSeconds())
console.log(myDateNow.getMilliseconds())
console.log(myDateNow.getTime()) //time stam analo la 'Date.now()'

console.log(new Date(myDateNow.setFullYear(2030)))
//setam anul 2030 si afisham data din 2030