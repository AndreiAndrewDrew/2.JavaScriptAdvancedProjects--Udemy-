'use strict'

const myMap = new Map([ //introducem un masiv de masive!!!
    ['London', 10],
    ['Chisinau', 8],
    ['Paris', 14]
])
console.log(myMap)

//Convertatsia object in map

const myObject = {
    london: 10,
    chisinau: 8,
    paris: 12
}

console.log(Object.entries(myObject)) //[ [ 'london', 10 ], [ 'chisinau', 8 ], [ 'paris', 14 ] ]
//primi masiv de masive din obiectul 'myObject'
const myMap2 = new Map(Object.entries(myObject))
console.log(myMap2) //Map(3) { 'london' => 10, 'chisinau' => 8, 'paris' => 14 }
//astfel am facut convertatsia obiectului 'myObject' in map 'myMap2'
console.log(myMap2.size)