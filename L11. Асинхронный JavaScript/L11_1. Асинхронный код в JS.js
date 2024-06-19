'use strict'

console.log('Exemplu de Cod Sinchron:')
console.log(1)
console.log(2)
console.log(3)


console.log('Exemplu de Cod Asinchron:')
console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000) //1000 ms

console.log(3)