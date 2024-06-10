'use strict'

console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000)

console.log(3)
// 1
// 3
// 2
// setTimeout() se otlajeste si se executa console.log(3)
// apoi dupa o secunda se executa console.log(2)
// toate aceste se face datorita lui Event Loop,
// un ciclu care tot timpu cauta sa fincizes executsia codului