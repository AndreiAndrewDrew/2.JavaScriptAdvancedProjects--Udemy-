//Tot lucru se face in 'app.js' pentru a verifica in browser nu in Output la VS
//Acest fisier este copia lui 'app.js', pentru invatsare!!!

'use strict'

const arrayUsers = ['Andrew', 'Nasty', 'Eva']
console.log(arrayUsers)

const flights = ['England', 'England', 'USA', 'Moldova', 'Moldova']

const setFlights = new Set(flights) // convertam din 'array' in 'set'
console.log(setFlights) // Set(3) { 'England', 'USA', 'Moldova' } - set unifica elementele
console.log(setFlights.size)
console.log(setFlights.has('Moldova'))
//Controlam cu metoda 'has' daca elementul 'Moldova' este in 'setFlights'
//has este analog la 'includes'
setFlights.add('Paris')
console.log(setFlights)
setFlights.delete('England')
console.log(setFlights)

for (const flight of setFlights) {
    console.log(flight)
}

const setToArray = [...setFlights]
console.log(setToArray) //convertam 'set' in 'array'

const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]) //'set de obiecte' din 'masiv de obiecte'
console.log(setObj) //Set(3) { { a: 1 }, { b: 2 }, { b: 2 } } - setul de obiecte nu se unificheaza

console.log(new Set('abcd')) //Set(4) { 'a', 'b', 'c', 'd' } -obtsinem set din string
//set se obtine numai din obiecte iterabile
//console.log(new Set(true)) // o sa avem eroare :TypeError:boolean true is not iterable