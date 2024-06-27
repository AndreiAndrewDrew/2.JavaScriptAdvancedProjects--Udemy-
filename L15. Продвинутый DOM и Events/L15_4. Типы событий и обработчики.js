'use strict'

//cale alternativa de ai atribuie lui button actiunea generate
// onclick="generate(event)"

const button = document.querySelector('.button') //alegem dupa clasa

button.addEventListener('click', (event) => {
    console.log('Event 1')
}) //este analog cu aceea daca am scri js in html docuent
//avantajul la asa cale este ca putem face multe venturi la un obiect
button.addEventListener('click', (event) => {
    console.log('Event 2')
})
//dara daca scrim direct in html putem numai un event sai dam buttonului
//addEventListener() rulet!!!

const eventHendler = function (event) {
    console.log('Event 3')
}

button.addEventListener('mouseover', eventHendler)
button.addEventListener('click', (event) => {
    console.log('Event 4')
    button.removeEventListener('click', eventHendler)
    //stergem eventul (eventHendler)
})
