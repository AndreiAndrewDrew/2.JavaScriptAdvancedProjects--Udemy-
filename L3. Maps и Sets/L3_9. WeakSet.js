'use strict'

let a = { a: 1 }
let b = { b: 2 }
const myWeakSet = new WeakSet([a, b])

console.log(myWeakSet)

a = null
setTimeout(() => {
    console.log(myWeakSet)
}, 1000)