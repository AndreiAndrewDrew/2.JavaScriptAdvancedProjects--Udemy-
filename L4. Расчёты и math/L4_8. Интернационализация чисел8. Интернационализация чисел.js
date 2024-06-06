'use strict'


const options1 = {
    style: 'currency',
    currency: 'MDL'
}

const options2 = {
    style: 'currency',
    currency: 'RUB'
}

const options3 = {
    style: 'currency',
    currency: 'USD'
}

console.log(new Intl.NumberFormat('md-MD', options1).format(23000))
console.log(new Intl.NumberFormat('ru-RU', options2).format(23000))
console.log(new Intl.NumberFormat('en-US', options3).format(23000))
// formate diferite in diferite tsari

const options4 = {
    style: 'decimal'
}

console.log(new Intl.NumberFormat('ru-RU', options4).format(10000))
console.log(new Intl.NumberFormat('md-MD', options4).format(10000))

const options5 = {
    style: 'percent'

}

console.log(new Intl.NumberFormat('ru-RU', options5).format(0.1))
console.log(new Intl.NumberFormat('md-MD', options5).format(0.3))
console.log(new Intl.NumberFormat('en-US', options5).format(0.7))

const options6 = {
    style: 'unit',
    unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-RU', options6).format(14))
console.log(new Intl.NumberFormat('md-MD', options6).format(15))
console.log(new Intl.NumberFormat('en-US', options6).format(16))