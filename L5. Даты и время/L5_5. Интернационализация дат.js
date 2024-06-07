'use strict'

const date = new Date()

console.log(date)
//internatsionalizare adatei
console.log(new Intl.DateTimeFormat('ro-MD').format(date))
console.log(new Intl.DateTimeFormat('en-US').format(date))
console.log(new Intl.DateTimeFormat('ru-RU').format(date))
console.log(new Intl.DateTimeFormat('ro-RO').format(date))

const options1 = {
    hour: 'numeric',
    minute: 'numeric'
}

console.log(new Intl.DateTimeFormat('ro-MD', options1).format(date))
console.log(new Intl.DateTimeFormat('en-US', options1).format(date))
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date))

const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit'
}

console.log(new Intl.DateTimeFormat('ro-MD', options2).format(date))
console.log(new Intl.DateTimeFormat('en-US', options2).format(date))
console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date))

console.log(navigator.language) //ro-MD
// 'navigator' - obiect global care are diferite optiuni
// de la navigatia utilizatorului nostru
//astfel afisham pentru utilizatorul nostru, unde ne aflam
console.log(new Intl.DateTimeFormat(navigator.language, options2).format(date))
