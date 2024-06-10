'use strict'

const interval = setInterval(() => {
    console.log(new Date())
}, 1000)

const timer = setTimeout(() => {
    clearInterval(interval)
}, 5000) //peste 5 secunde stergem intervalul

console.log(interval) //1
console.log(timer) //2
//intervalil si timerul au identificatroe diferite