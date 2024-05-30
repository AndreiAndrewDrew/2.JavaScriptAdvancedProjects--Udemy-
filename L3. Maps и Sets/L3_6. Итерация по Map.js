'use strict'

const myMap = new Map([ //introducem un masiv de masive!!!
    ['London', 10],
    ['Chisinau', 8],
    ['Paris', 14]
])
console.log(myMap)

// iteratsii pe map
//metoda 1
for (const entry of myMap) {
    console.log(entry) //optsinem masive
}

//metoda 2
// cu ajutorul destructurizatie a masivului
for (const [key, value] of myMap) {
    console.log(key) // lucram cum vrem cu keiele si valorile
    console.log(value)
}

//metoda 3
console.log([...myMap]) //convertatsia mapei in masiv de masive

console.log(myMap.keys()) //intoarce keile
console.log(myMap.values()) //intoarce valorile

//metoda 4
//convertam in masive
console.log([...myMap.keys()]) // masiv din kei
console.log([...myMap.values()]) // masiv din valori

