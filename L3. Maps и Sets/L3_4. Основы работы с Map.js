'use strict'

const watherMap = new Map()

// watherMap.set('London', '10')
// console.log(watherMap.set('Chisinau', '15')) // este la fel ca 'console.log(watherMap)'
// ultimul 'set' intoarce mapa reinoita 
// rezulta putem sa facem =>
watherMap
    .set('London', '10')
    .set('Chisinau', '15')
    .set('Paris', '23')

console.log(watherMap.get('Chisinau')) //15 - 'get' intorce keia 
console.log(watherMap.get('Not Found')) //undefined

console.log(watherMap.has('London')) //true - arata ca exista 'London' in mapa
console.log(watherMap.has('Not Found')) //false 

console.log(watherMap.delete('London')) //Stergem 'London' 
//'delete'ne intoarce 'true' adica a putut sa stearga
console.log(watherMap.delete('Not Found')) //false

//watherMap.clear() //stergem tot din mapa

const arr = [1, 2, 3]
const object = { a: 1 }
watherMap //putem sa adugam diferite kei cu valori
    .set(1, 5)
    .set(true, 'yes')
    .set(true, 'yes!') // cind se repeta cheie se reinscrie valoare!!!
    .set(false, 'no')
    .set([1, 2, 3], 'array') // masiv in calitate de keie
    .set({ a: 1 }, { b: 1 }) //obiect in calitate de keie si obiect in calitet de valoare
    .set(arr, 'array')
    .set(object, { b: 1 })

console.log(watherMap)
console.log(watherMap.size)

console.log(watherMap.get([1, 2, 3])) //undefined 
console.log(watherMap.get({ a: 1 })) //undefined 
//deoarce masivele si obiectile nu sunt date primitive dar compuse
//rezolvare de innainte se atribuie unei constante masivul

console.log(watherMap.get(arr)) //array -deja primim valoarea unde keie e un maiv
console.log(watherMap.get(object)) //{ b: 1 } - unde keie e un obiect