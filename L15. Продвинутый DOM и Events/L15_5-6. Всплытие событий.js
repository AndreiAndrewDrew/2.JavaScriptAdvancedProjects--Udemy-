'use strict'

const button = document.querySelector('.button')
const inner = document.querySelector('.inner')
const wrapper = document.querySelector('.wrapper')

button.addEventListener('click', function (event) {
    console.log('butonul')
    console.log(event.target)
    console.log(event.currentTarget)
    this.style.backgroundColor = 'purple'
})

inner.addEventListener('click', function (event) {
    console.log('inner')
    console.log(event.target)
    console.log(event.currentTarget)
    this.style.backgroundColor = 'blue'
})

wrapper.addEventListener('click', function (event) {
    console.log('wrapper')
    console.log(event.target)
    console.log(event.currentTarget)
    this.style.backgroundColor = 'green'
})