'use strict'
let a = { a: 1 }
let b = { b: 1 }
const myWeakMap = new WeakMap() //Weak- se traduce 'slaba'
// WeakMapele- in calitate de cheie poate sa aiba numai obiecte
myWeakMap.set(a, 'testA') //aduagam cimp nou
myWeakMap.set(b, 'testB')

console.log(myWeakMap)
console.log(myWeakMap.get(a))
console.log(myWeakMap.has(a))

a = null //facem ca keiea sa dispare,atunci disapre si obiectul din weakMap
setTimeout(() => {
    console.log(myWeakMap)
    console.log(myWeakMap.get(a))
    console.log(myWeakMap.has(a))
}, 1000)

//exemplu cu 'cache'
//des se foloseste WeakMap pentru cache
let cache = new WeakMap()

function getValue(obj) {
    if (!cache.has(obj)) {
        const result = 1 //aici e pus 1 dar in cazuri reale poate sa fie operatii compuse 
        cache.set(obj, result)
    }
    return cache.get(obj)
}

const rez = getValue(b)
console.log(rez) //1
const rez2 = getValue(b)
console.log(rez2) //1










