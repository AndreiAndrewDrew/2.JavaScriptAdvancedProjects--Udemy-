'use strict'

console.log(performance.now())
//performance.now() ne afisheaza cite ssecunde nio trebuit pentru executsia
//acestei operatii 

setTimeout(() => {
    console.log(performance.now())
}, 1000) //1326.6999998092651
// se executa NU intro secunda fix!!!

const mark1 = performance.now()
setTimeout(() => {
    const mark2 = performance.now()
    console.log(mark2 - mark1) //1013.3000001907349
}, 1000)
// Nu primim niciodata fix 1 secunda
// setTimeout() - Nu este exact!!!