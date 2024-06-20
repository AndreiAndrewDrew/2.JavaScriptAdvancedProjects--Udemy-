'use strict'

const prom = new Promise((resolve, reject) => {
    if (new Date() < new Date('01/01/25')) {
        reject(new Error('Eroare'))
    }
    resolve('Succes!!!')
})

prom
    .then(data => console.log(data))
    .catch(error => console.log(error))

function timeout(sec) { //invalim timeOutul frumos in Promise
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sec * 1000)
    })
}

timeout(1)
    .then(() => {
        console.log(1) //afisheaza 1
        return timeout(1)
    })
    .then(() => {
        console.log(1) ////pesete o sec inca odata afisheaza 1
        return timeout(1)
    })
    .then(() => console.log(1))//pesete o sec inca odata afisheaza 1