'use strict'
/** Trebuie de schimbat cu locurile keile cu valorile intro alta mapa */

const myMap = new Map([ //introducem un masiv de masive!!!
    ['London', 10],
    ['Chisinau', 8],
    ['Paris', 14]
])
console.log(myMap)

const reverseMap = new Map([...myMap].map(el => el.reverse()))
console.log(reverseMap)

//[...myMap] - btinem masiv de masive
//cu metoda 'map' creem masiv nou din masivul de masive obtsinut '[...myMap]'
//cu metoda reverse a masivelor, intorcem elemtul din masiv
// '[...myMap].map(el => el.reverse())' un masiv de masive cu elemnte reversate
//tot asta il punem in mapa noua!!!








