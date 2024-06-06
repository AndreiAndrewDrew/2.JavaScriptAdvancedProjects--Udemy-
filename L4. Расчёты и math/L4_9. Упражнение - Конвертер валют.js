'use strict'

/**
 * creati o functie care primeste 3 parametre
 * -Suma,
 * -valuta initsiala
 * -valuta de convertatie
 * returneaza un string cu suma convertata cu postfixul valuta, 
 * daca nu reuseste atunci intoarce null,
 * 3 valute
 */

function myConvertValut(sum, valInit, valConvertata) {
    const toateValutele = [
        { name: 'USD', mult: 1 },
        { name: 'RUB', mult: 1 / 89 },
        { name: 'MDL', mult: 1 / 18 },
        { name: 'EUR', mult: 1.1 }
    ]

    const initial = toateValutele.find(v => v.name === valInit)
    if (!initial) {
        return null
    }
    const convert = toateValutele.find(v => v.name === valConvertata)
    if (!convert) {
        return null
    }
    return new Intl
        .NumberFormat('md-MD', { style: 'currency', currency: convert.name })
        .format(sum * initial.mult / convert.mult)

}

console.log(myConvertValut(1000, 'RUB', 'USD'))
console.log(myConvertValut(1000, 'MDL', 'USD'))
console.log(myConvertValut(1000, 'MDL', 'RUB'))
console.log(myConvertValut(1000, 'MDL', 'EUR'))
console.log(myConvertValut(1000, 'RON', 'USD'))
console.log(myConvertValut(1000, 'RUB', 'UAH'))