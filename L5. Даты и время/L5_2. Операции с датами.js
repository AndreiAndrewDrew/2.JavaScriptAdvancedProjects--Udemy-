'use strict'

const date1 = new Date(1986, 10, 20)
const date2 = new Date(2024, 5, 7)
console.log(date1)
console.log(Number(date1)) //convertam in numar
console.log(Number(date2))
console.log(date2 - date1) //diferentsa de date 2592000000

//CReem o functie care socoate diferentsa de zile intre doua date
function getDaysBetweeenDates(dateFirst, dateSecond) {
    return `${(dateSecond - dateFirst) / (1000 * 60 * 60 * 24)} de zile`
}

console.log(getDaysBetweeenDates(date1, date2))