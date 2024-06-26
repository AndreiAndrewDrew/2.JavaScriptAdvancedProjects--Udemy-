'use strict'

console.log(document)
console.log(document.head)
console.log(document.body)

const el = document.querySelector('.wrapper')
console.log(el)

const el2 = document.querySelectorAll('.wrapper')
console.log(el2)

const el3 = document.querySelectorAll('meta')
console.log(el3)

const el4 = document.getElementsByClassName('wrapper')
console.log(el4)

const el5 = document.getElementsByTagName('div')
console.log(el5)

const button = document.createElement('button')
button.innerHTML = 'Test'

const button2 = document.createElement('button')
button2.innerHTML = 'Test2'

const button3 = document.createElement('button')
button3.innerHTML = 'Test3'

const button4 = document.createElement('button')
button4.innerHTML = 'Test4'

el.append(button)
el.prepend(button2)
el.before(button3)
el.after(button4)

function generate() {
    el.remove()
}