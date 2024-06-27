'use strict'

const wrapper = document.querySelector('.wrapper') //querySelector mere in jos pe copakul DOM
console.log(wrapper)

const inner = document.querySelector('.inner')
console.log(inner)

const button = document.querySelector('.button')
console.log(button)

console.log(inner.childNodes)
console.log(inner.children) //ne afisheaza obiectele moshtenite
console.log([...inner.children])

console.log(inner.parentElement)
console.log(inner.parentNode)

console.log(button.closest('.wrapper')) //closet se misca in sus pe copakul DOM

//elemente pe aceealash nivel
//metoda 1
console.log(button.previousElementSibling)
console.log(button.previousSibling)

console.log(button.nextElementSibling)
console.log(button.nextSibling)