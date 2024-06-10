'use strict'

setTimeout(() => {
    console.log('Boom!!!')
}, 1000)

setTimeout((message) => {
    console.log(message)
}, 2000, 'Tadishi!!!')

setTimeout((message1, message2) => {
    console.log(message1)
    console.log(message2)
}, 3000, 'Chim-pou!!!', 'Skibi-du!!')

console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000)
console.log(3)
// o sa se execute 1,3 si apoi 2 si restu timere

//Exemplu de aminare a timerului

const timer1 = setTimeout(() => {
    console.log('Ex. de aminare a timerului')
}, 4000)
clearTimeout(timer1) //astfel se sterge timerul


const message = ['hello', 'goodbye']

const timer2 = setTimeout((message1, message2) => {
    console.log('Mesaj din array')
    console.log(message1)
    console.log(message2)
}, 5000, ...message)
