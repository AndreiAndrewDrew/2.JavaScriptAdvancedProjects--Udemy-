'use strict'
Promise.resolve('Succes!!!').then(data => console.log(data)) //aldoilea se afisheaza

const prom = new Promise((resolve) => {
    console.log('Constructor') //primul se afisheaza
    for (let i = 0; i < 1000000000; i++) { /*incarcam eventLoop-ul*/ }
    setTimeout(() => {
        resolve('Timer') //se afisheaza al patrulea
    }, 1000)
})
prom.then(data => console.log(data))

Promise.reject(new Error('Eroare!')).catch(error => console.error(error)) //se afisheaza al treilea

