//fisierul app.js
'use strict';

import { add, sub } from './calc.js'

console.log('b - se afisheaza din app.js') //se afiseaza al doilea

console.log(add(3, 4)) //se afisheaza al treilea
console.log(sub(4, 2)) //se afisheaza al patrulea

// setInterval(() => {
//     console.log(add(3, 4))
// }, 1000)


//fisierul calc.js
export function add(f, s) {
    return f + s
}

export function sub(f, s) {
    return f - s
}

console.log('a - se afisheaza din calc.js') //se afisheaza primul

// setTimeout(() => {
//     add = function (f, s) {
//         return f * s
//     }
// }, 1500) 
