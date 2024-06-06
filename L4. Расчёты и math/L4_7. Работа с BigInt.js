'use strict'

const max = Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
// este cifra maxima sigura accesibila pentru lucru cu cifrele
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991
// respectiv cifra minimala sigura accesibila

console.log(max + 1)
console.log(max + 2) // nu e corect
console.log(max + 3)
// mai sus de cifra sigura maxima operatsiile nu snut sigure, incorecte

//bigInt
//varianta 1
console.log(23213153341234123513451435n) //acesta este bigInt
//varianta 2
console.log(BigInt(23213153341234123513451435)) //prmi cifra modificata, incorecta
console.log(BigInt('23213153341234123513451435')) // din string primim corect

//operatsiile cu bigInt cifre in exempplu cifrele vor fi mici
console.log(10n + 10n) //20n 
// console.log(10n + 10) // eroare: Cannot mix BigInt and other types, use explicit conversions
console.log(23213153341234123513451435n * 23213153341234123513451435n) //100n
//console.log(10n * 10) //tot eroare
console.log(10n / 2n) //5n
console.log(7n / 2n) //3n // bigInt fara virgula lucreza rotungrst la partea intreaga
console.log(4n / 3n) //1n 

console.log(10n < 20) //true
console.log(10n == 10) //true
console.log(10n === 10) //false
console.log(typeof 10n) //bigint
